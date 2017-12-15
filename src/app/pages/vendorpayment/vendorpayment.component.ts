import { Component, OnInit } from '@angular/core';
import { VehicleAmountService } from '../../service/vehicleamount.service';
import * as _ from 'underscore';
import { NgRedux } from "ng2-redux/lib";
import { IAppState } from "../../store/store";

@Component({
  selector: 'app-vendorpayment',
  templateUrl: './vendorpayment.component.html',
  styleUrls: ['./vendorpayment.component.css']
})
export class VendorPaymentComponent implements OnInit {

  vendorPaymentViewData: any;

  constructor(
    private vendorAmount: VehicleAmountService,
    private ngRedux: NgRedux<IAppState>
  ) {
    this.ngRedux.subscribe(() => {
      let pendingPaymentData = this.ngRedux.getState().pendingInfo;

      this.vendorPaymentViewData = _.chain(pendingPaymentData)
        .groupBy("vendorName")
        .map(function (value, key) {
          return {
            vendorName: key,
            totalAmount: sum(_.pluck(value, "totalAmount")),
            balanceAmount: sum(_.pluck(value, "balanceAmount")),
            tripData: value
          }
        })
        .value();
      console.log(this.vendorPaymentViewData);
    })
  }

  ngOnInit() {
    this.vendorAmount.getVechileamount()
  }
}

function sum(numbers) {
  return _.reduce(numbers, function (result, current) {
    return result + parseFloat(current);
  }, 0);
}
