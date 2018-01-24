import { Component, OnInit, DoCheck, Input, Output, EventEmitter } from '@angular/core';
import { LocationService } from '../../../service/location.service';
import { VendorViewService } from '../../../service/vendorview.service';
import { VehicleViewService } from '../../../service/vehicleview.service';
import { NgForm } from '@angular/forms';
import * as _ from 'underscore';

import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../../../store/store';
import * as Const from '../../../store/actions';
import { TripService } from "../../../service/trip.service";

@Component({
  selector: 'app-tripline-insert-update',
  templateUrl: './tripline-insert-update.component.html',
  styleUrls: ['./tripline-insert-update.component.css']
})
export class TripLineInsertUpdateComponent implements OnInit, DoCheck {
//  @select(vehicleInfo => { vehicleInfo.vehicleNo}) vehicleData;

  @Input() public tripData: any = { location: {}, officeInfo: {}, paymentInfo: []};

  @Input() public actionType: string;
  @Input()  public officeData: any[];
  @Input()  public driverData: any[];
  @Input()  public vendorData: any[];
  @Input() public vehicleData: any[any];
  @Input() public cityLocation: any[];
  @Output() cancelClicked = new EventEmitter<boolean>();
  public admin: boolean = false;
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private tripService: TripService
  ) {
  //  this.tripData = new Trip();    
   }

   ngOnInit(){     
    this.tripData.tripType = "Line";
    if (this.actionType == "add") {
    this.tripData.advanceBalanceAmount = 0;
    this.tripData.driverAcceptedAmount = 0;
    this.tripData.selfAmount = 0;
    this.tripData.roundOffAmount = 0;
    this.tripData.unloadingCharges = 0;
    this.tripData.loadingCharges = 0;
     }
    this.tripData.totalAmount = Math.round(this.tripData.totalAmount);
    this.tripData.vehicleAmount = Math.round(this.tripData.vehicleAmount);
    this.tripData.balanceAmount = Math.round(this.tripData.balanceAmount);    
    if(localStorage.getItem("UserName") == "Admin") {
      this.admin = true;
    }
   }

   ngDoCheck() {
    if(this.actionType == "add" && this.tripData.typeOfPayment == "advance") {
    this.tripData.paidAmount = this.tripData.driverAcceptedAmount + this.tripData.selfAmount;
    this.tripData.advanceBalanceAmount = this.tripData.advanceAmount - this.tripData.paidAmount;
    this.tripData.balanceAmount = this.tripData.vehicleAmount - this.tripData.paidAmount;
    } else if (this.actionType == "add" && this.tripData.typeOfPayment != "advance") {
          this.tripData.paidAmount = 0;
          this.tripData.balanceAmount = this.tripData.vehicleAmount - this.tripData.paidAmount;
    } else if(this.actionType == "update") {
          this.tripData.balanceAmount = this.tripData.vehicleAmount - (this.tripData.paidAmount + this.tripData.unloadingCharges + this.tripData.roundOffAmount);
    }
   }

   typofPay() {
    console.log(this.tripData.typeofPayment);
  }

  onSubmit(form: NgForm) {
    console.log(form);
    if(this.actionType == "add") {
    if(this.tripData.driverAcceptedAmount > 0) {
      let driverPayment:any = {};
      driverPayment.amountReceived = this.tripData.driverAcceptedAmount;
      driverPayment.runningBalanceAmount = this.tripData.balanceAmount;
      driverPayment.paidTo = "Driver";
      driverPayment.date = new Date();
      this.tripData.paymentInfo.push(driverPayment);
    }
    if(this.tripData.selfAmount > 0) {
      let selfPayment:any = {};
      selfPayment.amountReceived = this.tripData.selfAmount;
      selfPayment.runningBalanceAmount = this.tripData.balanceAmount;
      selfPayment.paidTo = "Self";
      selfPayment.date = new Date();      
      this.tripData.paymentInfo.push(selfPayment);
    }    
    }
    this.ngRedux.subscribe(() => {
    if( this.ngRedux.getState().modal == Const.UPDATED_CLOSE_MODAL) {
      this.cancelClicked.emit(true);
    }
    })
    if(this.actionType == 'update') {
    this.tripService.updateTrip(form, this.tripData.tripId);
     } else if(this.actionType == 'add')  {
    this.tripService.addTrip(form);
    }
  }
  closeModal(event: any) {
   this.cancelClicked.emit(true);
  }
    vehicleNoUpdated(vehicleNum: any) {
    this.tripData.driverName = (this.vehicleData.find( v => v.vehicleNo == vehicleNum)).driverName;
  }
    deleteTrip(tripId: any) {
    this.tripService.deleteTrip(tripId);
  }
}
