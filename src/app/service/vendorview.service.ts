import { Injectable, Component } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClient } from "@angular/common/http";
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store/store';
import * as Const from '../store/actions';

@Injectable()


export class VendorViewService {  
  baseUrl = 'http://localhost:3001/';
  constructor(
    
    private httpClient: HttpClient,
    private ngRedux: NgRedux<IAppState>
  ) {
    
  }

  getVendor() {
    this.httpClient.get(this.baseUrl+'vendor')
      .subscribe((res) => {
        this.ngRedux.dispatch({ type: Const.FETCH_ALL_VENDORS_SUCCESS, vendorInfo: res});
      }, (err) => {
        this.ngRedux.dispatch({ type: Const.FETCH_ALL_VENDORS_ERROR});
      })
  }

  getSingleVendor(id) {
    return this.httpClient.get(this.baseUrl+'vendor/'+id)
    .map((sRes)=> sRes)
    .catch((error: any) => Observable.throw(error));
  }

  updateVendor(vendor) {
    this.httpClient.put(this.baseUrl+'vendor/'+vendor.id, vendor)
    .subscribe((updated)=> {
      this.ngRedux.dispatch({ type: Const.UPDATE_VENDOR_SUCCESS, vendorInfo: updated});
    }, (err) => {
      this.ngRedux.dispatch({ type: Const.UPDATE_VENDOR_ERROR});
    });    
  }

  addVendor(vendor) {
    this.httpClient.post(this.baseUrl+'vendor', vendor)
    .subscribe((updated)=> {
      this.ngRedux.dispatch({ type: Const.ADD_VENDOR_SUCCESS, vendorInfo: updated});
    }, (err) => {
      this.ngRedux.dispatch({ type: Const.ADD_VENDOR_ERROR});
    });    
  }

  
}
