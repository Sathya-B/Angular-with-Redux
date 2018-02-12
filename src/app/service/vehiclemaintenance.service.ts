import { Injectable, Component } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store/store';
import * as Const from '../store/actions';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as Conf from '../config/configuration';
import { ApiService } from './api.service';

@Injectable()


export class VehicleMaintenanceService {
  constructor(private ngRedux: NgRedux<IAppState>,
    private apiService: ApiService) {
  }

  getVechileMaintenance() {
    this.apiService.get('', { useAuth: false }, Conf.apiUrl.serverUrl +'Vehicle/Maintenance').then(
      (response: any) => {        
        if(response.code == '200') {
          this.ngRedux.dispatch({ type: Const.FETCH_ALL_MAINTENANCE_SUCCESS, vehicleMaintenanceInfo: response.data });
        } else {
          throw response.error;
        }        
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  updateVechileMaintenance(vehicle) {
    let userName = localStorage.getItem("UserName");
    this.apiService.put('Vehicle/Maintenance/' + userName + '/' + vehicle.vehicleId, vehicle,
            { useAuth: true }, undefined).then(
            (response: any) => {
              console.log(response);
              if (response.code === '200') {
                this.ngRedux.dispatch({ type: Const.UPDATE_MAINTENANCE_SUCCESS, vehicleMaintenanceInfo: vehicle });
              } else {
                throw response.error;
              }
            })
            .catch(
            (error: any) => {
              this.ngRedux.dispatch({ type: Const.UPDATE_MAINTENANCE_ERROR });
            }
            );
  }
  addVechile(vehicle) {
      delete vehicle.id;
      delete vehicle.vehicleId;
      let userName = localStorage.getItem("UserName");
      this.apiService.post('Vehicle/Maintenance/' + userName, vehicle,
            { useAuth: true }, undefined).then(
            (response: any) => {
              console.log(response.data);
              if (response.code === '200') {
                this.ngRedux.dispatch({ type: Const.ADD_MAINTENANCE_SUCCESS, vehicleMaintenanceInfo: response.data });
              } else {
                throw response.error;
              }
            })
            .catch(
            (error: any) => {
              this.ngRedux.dispatch({ type: Const.ADD_MAINTENANCE_ERROR });
            }
            );
  }

}
