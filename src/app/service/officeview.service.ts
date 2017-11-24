import { Injectable, Component } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store/store';
import * as Const from '../store/actions';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClient } from "@angular/common/http";

@Injectable()


export class OfficeViewService {  
  baseUrl = 'http://localhost:3001/';
  constructor(
    
    private httpClient: HttpClient,
    private ngRedux: NgRedux<IAppState>
  ) {
    
  }

  getOffice() {
    this.httpClient.get(this.baseUrl+'office')
      .subscribe((res) => {
        this.ngRedux.dispatch({ type: Const.FETCH_ALL_OFFICE_SUCCESS, officeInfo: res});
      }, (err) => {
        this.ngRedux.dispatch({ type: Const.FETCH_ALL_OFFICE_ERROR});
      })
  }

  updateOffice(office) {
    this.httpClient.put(this.baseUrl+'office/'+office.id, office)
    .subscribe((updated)=> {
      this.ngRedux.dispatch({ type: Const.UPDATE_OFFICE_SUCCESS, officeInfo: updated});
    }, (err) => {
      this.ngRedux.dispatch({ type: Const.UPDATE_OFFICE_ERROR});
    });    
  }
  addOffice(office) {
    this.httpClient.post(this.baseUrl+'office', office)
    .subscribe((updated)=> {
      this.ngRedux.dispatch({ type: Const.ADD_OFFICE_SUCCESS, officeInfo: updated});
    }, (err) => {
      this.ngRedux.dispatch({ type: Const.ADD_OFFICE_ERROR});
    });    
  }
  
}
