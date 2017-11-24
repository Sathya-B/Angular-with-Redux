import { Component, OnInit, Input } from '@angular/core';
import { LocationService } from '../../../service/location.service';
import { VendorViewService } from '../../../service/vendorview.service';
import { VehicleViewService } from '../../../service/vehicleview.service';
import { Trip,advance,location } from './trip.model';
import * as _ from 'underscore';

import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../../../store/store';
import * as Const from '../../../store/actions';

@Component({
  selector: 'app-trip-insert-update',
  templateUrl: './trip-insert-update.component.html',
  styleUrls: ['./trip-insert-update.component.css']
})
export class TripInsertUpdateComponent implements OnInit {
  vendorData: any[];
  @select('vehicleInfo') vehicleData;

  locationData: any;
  cityLocation: any = [];

  @Input() public tripData: Trip;

  constructor(
    private locationSer: LocationService,
    private vendorSer: VendorViewService,
    private vehicleSer: VehicleViewService,
    private ngRedux: NgRedux<IAppState>
  ) {
    this.tripData = new Trip();
   }

  ngOnInit() {
    this.getlocationList();
    this.getVehicleList();
    this.getVendorList();
  }

  getlocationList() {
    this.locationSer.getLocation()
      .subscribe((locRes) => {
        this.locationData = _.map(locRes, (location: any) => {
          if (location.state == 'Tamil Nadu') {
            return location;
          }
        })
        this.locationData = _.without(this.locationData, undefined);
        _.map(this.locationData, (c: any) => {
          this.cityLocation.push(c.city)
        });
      });
  }

  getVehicleList() {
    // this.vehicleSer.getVechile()
    //   .subscribe((vehicleRes) => {
    //     this.vehicleData = _.map(vehicleRes, (v: any) => {
    //       return this.vehicleData = v.vehicleNo;
    //     });

    //   })
  }

  getVendorList() {
    this.ngRedux.subscribe(() => {
    this.vendorData =  _.map(this.ngRedux.getState().vehicleInfo,(v: any) => {
          return this.vendorData = v.vendorName;
        });
    console.log(this.vendorData);  
    })
  }

  typofPay() {
    console.log(this.tripData.typeofPayment);
  }

}
