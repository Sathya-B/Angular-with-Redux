import { Component, OnInit } from '@angular/core';
import { VehicleViewService } from "../../service/vehicleview.service";
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from "../../store/store";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

public expiryData: any = { insuranceRenewalList:[], fcRenewalList:[], npTaxRenewalList:[], permitRenewlList:[]};
public serviceData: any = { oilService:[], wheelGrease:[], airFilter:[], tyrePowder:[]};
  constructor(private data: VehicleViewService, private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.data.getExpiry();
    this.data.getService();
    this.ngRedux.subscribe(()=> {
      this.expiryData = this.ngRedux.getState().expiryInfo;
      this.serviceData = this.ngRedux.getState().serviceInfo;     
    })
  }

}
