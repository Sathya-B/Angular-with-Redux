import { Component, OnInit, DoCheck, Input, Output, EventEmitter } from '@angular/core';
import { LocationService } from '../../../service/location.service';
import { VendorViewService } from '../../../service/vendorview.service';
import { VehicleViewService } from '../../../service/vehicleview.service';
import { Trip, Advance, Location } from './trip.model';
import { NgForm } from '@angular/forms';
import * as _ from 'underscore';

import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../../../store/store';
import * as Const from '../../../store/actions';
import { TripService } from "../../../service/trip.service";

@Component({
  selector: 'app-trip-insert-update',
  templateUrl: './trip-insert-update.component.html',
  styleUrls: ['./trip-insert-update.component.css']
})
export class TripInsertUpdateComponent implements OnInit, DoCheck {
//  @select(vehicleInfo => { vehicleInfo.vehicleNo}) vehicleData;

  @Input() public tripData: any = { location: {}, officeInfo: {}, paymentInfo: []};

  @Input() public actionType: string;
  @Input()  public officeData: any[];
  @Input()  public driverData: any[];
  @Input()  public vendorData: any[];
  @Input() public vehicleData: any[];
  @Input() public cityLocation: any[];
  @Output() cancelClicked = new EventEmitter<boolean>();
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private tripService: TripService
  ) {
  //  this.tripData = new Trip();    
   }

   ngOnInit(){     
    if (this.actionType == "add") {
    this.tripData.advanceBalanceAmount = 0;
    this.tripData.driverAcceptedAmount = 0;
    this.tripData.selfAmount = 0;
    this.tripData.roundOffAmount = 0;
    this.tripData.unloadingCharges = 0;
    }  
   }

   ngDoCheck() {
    this.tripData.totalAmount = this.tripData.ratePerTon * this.tripData.noOfTons;
    if(this.tripData.unloadTon > 0) {
      this.tripData.vehicleAmount = (this.tripData.ratePerTon - this.tripData.crossing) * this.tripData.unloadTon;
    } else {
      this.tripData.vehicleAmount = (this.tripData.ratePerTon - this.tripData.crossing) * this.tripData.noOfTons;
    }    
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
    this.tripService.updateTrip(form);
     } else if(this.actionType == 'add')  {
    this.tripService.addTrip(form);
    }
  }
  closeModal(event: any) {
   this.cancelClicked.emit(true);
  }
}
