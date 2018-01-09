import { Component, OnInit, TemplateRef } from '@angular/core';
import { TripService } from '../../service/trip.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Trip } from './trip-insert-update/trip.model';
import { NgRedux, select } from "ng2-redux";
import { IAppState } from "../../store/store";
import { LocationService } from "../../service/location.service";
import { VendorViewService } from "../../service/vendorview.service";
import { VehicleViewService } from "../../service/vehicleview.service";
import * as _ from 'underscore';
import { DriverViewService } from "../../service/driverview.service";
import { OfficeViewService } from "../../service/officeview.service";

@Component({
  selector: 'app-tripinfo',
  templateUrl: './tripinfo.component.html',
  styleUrls: ['./tripinfo.component.css']
})
export class TripInfoComponent implements OnInit {

  tripData: any;
  modalRef: BsModalRef;
  @select('tripInfo') tripInfo;
  public updateAction: string = 'update';
  public addAction: string = 'add';
  public vendorData: any[] = [];
  public vehicleData: any[any] = [{}];
  public officeData: any[] = [];
  public driverData: any[] = [];
  public cityLocation: any[] = [];
  public locationData: any;
  public searchVehicleNo: any;
  public searchFrom: Date;
  public searchTo: Date;
  constructor(
    private tripServ : TripService,
    private modalService: BsModalService,
    private ngRedux: NgRedux<IAppState>,
    private locationSer: LocationService,
    private vendorSer: VendorViewService,
    private vehicleSer: VehicleViewService,
    private officeSer: OfficeViewService,
    private driverSer: DriverViewService
  ) { 
//    this.tripData = new Trip();
  }

  ngOnInit() {
    this.getTripList();
    this.getlocationList();
    this.getVehicleList();
    this.getVendorList();
    this.getOfficeList();
    this.getDriverList();
   this.ngRedux.subscribe(() => {
    this.vendorData =  _.map(this.ngRedux.getState().vendorInfo,(v: any) => {
          return this.vendorData = v.vendorName;
        });
    this.vehicleData = _.map(this.ngRedux.getState().vehicleInfo, (v: any) => {
          return this.vehicleData = { 'vehicleNo': v.vehicleNo, 'driverName': v.driverName };
    });
    this.officeData = _.map(this.ngRedux.getState().officeInfo, (v: any) => {
          return this.officeData = v.officeName;
    });
    this.driverData = _.map(this.ngRedux.getState().driverInfo, (v: any) => {
          return this.driverData = v.driverName;
    });
   })

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
    this.vehicleSer.getVechile()
  }

  getVendorList() {
    this.vendorSer.getVendor()
  }

  getTripList(){
    this.tripServ.getTripInfo()
  }
  
  getOfficeList(){
    this.officeSer.getOffice();
  }
  
  getDriverList(){
    this.driverSer.getDriver();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  addTrip(){
    this.tripData = new Trip();
  }
  searchTrips(){
    let query:string = '?';
    if(this.searchVehicleNo != undefined) {
      query = query + 'vehicleno=' + this.searchVehicleNo + '&';
    }
    if(this.searchFrom != undefined) {
      query = query + 'fromdate=' + this.searchFrom.toISOString() + '&';      
    }
    if(this.searchTo !=undefined) {
      query = query + 'todate=' + this.searchTo.toISOString() + '&';      
    }
    this.tripServ.searchTripInfo(query);
  }

}
