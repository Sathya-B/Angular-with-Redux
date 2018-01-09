import { Injectable, Component } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClient } from "@angular/common/http";
import { ApiService } from "./api.service";
import * as Const from '../store/actions';
import * as Conf from '../config/configuration';
import { NgRedux } from "ng2-redux/lib";
import { IAppState } from "../store/store";

@Injectable()


export class VehicleAmountService {  
  baseUrl = 'http://localhost:3001/';
  constructor(
    
    private ngRedux: NgRedux<IAppState>,
    private apiService: ApiService    
    
  ) {
    
  }

  getVechileamount() {
    this.apiService.get('', { useAuth: false }, Conf.apiUrl.serverUrl + 'Trip/unpaidbalance').then(
      (response: any) => {
        if (response.code == '200') {
          this.ngRedux.dispatch({ type: Const.FETCH_ALL_PENDING_SUCCESS, pendingInfo: response.data });
        } else {
          throw response.error;
        }
      })
      .catch((error: any) => {
        this.ngRedux.dispatch({ type: Const.FETCH_ALL_PENDING_ERROR });
      });
  } 
    getVechileamountFilter(query) {
    this.apiService.get('', { useAuth: false }, Conf.apiUrl.serverUrl + 'Trip/unpaidbalance/fromdate/todate' + query).then(
      (response: any) => {
        if (response.code == '200') {
          this.ngRedux.dispatch({ type: Const.FETCH_ALL_PENDING_SUCCESS, pendingInfo: response.data });
        } else {
          throw response.error;
        }
      })
      .catch((error: any) => {
        this.ngRedux.dispatch({ type: Const.FETCH_ALL_PENDING_ERROR });
      });
  } 
}
