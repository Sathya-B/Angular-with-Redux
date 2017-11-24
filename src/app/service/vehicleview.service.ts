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


export class VehicleViewService {  
  baseUrl = 'http://localhost:3001/';
  constructor(
    
    private httpClient: HttpClient,
    private ngRedux: NgRedux<IAppState>
  ) {
    
  }

  getVechile() {

    this.httpClient.get(this.baseUrl+'vehicle')
      .subscribe((res) => {
        this.ngRedux.dispatch({ type: Const.FETCH_ALL_VECHICLES_SUCCESS, vehicleInfo: res});
      }, (err) => {
        this.ngRedux.dispatch({ type: Const.FETCH_ALL_VECHICLES_ERROR});
      })
  }

  updateVechile(vehicle) {
    this.httpClient.put(this.baseUrl+'vehicle/'+vehicle.id, vehicle)
    .subscribe((updated)=> {
      this.ngRedux.dispatch({ type: Const.UPDATE_VECHICLE_SUCCESS, vehicleInfo: updated});
    }, (err) => {
      this.ngRedux.dispatch({ type: Const.UPDATE_VECHICLE_ERROR});
    });    
  }
  addVechile(vehicle) {
    this.httpClient.post(this.baseUrl+'vehicle', vehicle)
    .subscribe((updated)=> {
      this.ngRedux.dispatch({ type: Const.ADD_VECHICLE_SUCCESS, vehicleInfo: updated});
    }, (err) => {
      this.ngRedux.dispatch({ type: Const.ADD_VECHICLE_ERROR});
    });    
  }
  
}
