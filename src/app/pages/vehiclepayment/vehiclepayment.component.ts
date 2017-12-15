import { Component, OnInit } from '@angular/core';
import { VehicleAmountService } from '../../service/vehicleamount.service';
import * as _ from 'underscore';
import { NgRedux } from "ng2-redux/lib";
import { IAppState } from "../../store/store";

@Component({
  selector: 'app-vehiclepayment',
  templateUrl: './vehiclepayment.component.html',
  styleUrls: ['./vehiclepayment.component.css']
})
export class VehiclePaymentComponent implements OnInit {

  vehiclePaymentViewData: any;

  constructor(
    private vehicleAmount: VehicleAmountService,
    private ngRedux: NgRedux<IAppState>
  ) {
    this.ngRedux.subscribe(() => {
      let pendingPaymentData = this.ngRedux.getState().pendingInfo;

      this.vehiclePaymentViewData = _.chain(pendingPaymentData)
        .groupBy("vehicleNo")
        .map(function (value, key) {
          return {
            vehicleNo: key,
            totalAmount: sum(_.pluck(value, "totalAmount")),
            balanceAmount: sum(_.pluck(value, "balanceAmount")),
            tripData: value
          }
        })
        .value();
      console.log(this.vehiclePaymentViewData);
    })
  }

  ngOnInit() {
    this.vehicleAmount.getVechileamount()
  }
}

function sum(numbers) {
  return _.reduce(numbers, function (result, current) {
    return result + parseFloat(current);
  }, 0);
}
