import { Component, Input, Output, EventEmitter, OnInit, TemplateRef } from '@angular/core';
import { VehicleMaintenanceService } from "../../../service/vehiclemaintenance.service";
import { NgRedux } from 'ng2-redux';
import { IAppState } from "../../../store/store";
import * as Const from '../../../store/actions';
import { FileHolder, UploadMetadata } from "angular2-image-upload";
import { NgForm } from "@angular/forms/forms";
import { TokenService } from "../../../service/token.service";
import * as urls from '../../../config/configuration';
import { BsModalService, BsModalRef } from "ngx-bootstrap";
import * as _ from 'underscore';

@Component({
  selector: 'app-vehicle-maintenance-update',
  templateUrl: './vehicle-maintenance-update.component.html',
  styleUrls: ['./vehicle-maintenance-update.component.css']
})
export class VehicleMaintenanceUpdateComponent implements OnInit {
  
  @Input() public vehicleMaintenanceData: any;
  @Output() cancelClicked = new EventEmitter<boolean>();
  modalRef: BsModalRef;
  oilServiceRange: number = 40000;
  wheelGreaseRange: number = 40000;
  airFilterRange: number = 60000;
  clutchPlateRange: number = 120000;
  gearOilRange: number = 120000;
  crownOilRange: number = 120000;
  selfMotorRange: number = 120000;
  dynamoRange: number = 120000;
  radiatorRange: number = 120000;
  pinPushRange: number = 120000;
  steeringOilRange: number = 120000;
  nozzleServiceRange: number = 120000;
  speedoMeterRange: number = 0;
  dieselFilterRange: number = 25000;
  stainnerRange: number = 10000;
  tyrePowderRange: number = 10000;
  valveCheckerRange: number = 120000;
  coolantOilRange: number = 120000;
  oldMeterReading: number = 0;
  newMeterReading: number = 0;
  meterChangedDate: Date = null;

  constructor(private vehicleMaintenanceService: VehicleMaintenanceService, private ngRedux: NgRedux<IAppState>, private modalService: BsModalService) {
    
   }
  
  ngOnInit() {

}

  closeItem(event: any) {
      this.cancelClicked.emit(true);
  }
  updateVehicleMaintenance(vehicle: any) {
   this.vehicleMaintenanceService.updateVechileMaintenance(vehicle);
   this.ngRedux.subscribe(() => {
    if( this.ngRedux.getState().modal == Const.UPDATED_CLOSE_MODAL) {
      this.cancelClicked.emit(true);
    }
    })
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.ngRedux.subscribe(() => {    
    })
  }
  updateMeter(){
    this.vehicleMaintenanceData.runKm = this.newMeterReading;

    let vData = this.vehicleMaintenanceData
    let oldReading = this.oldMeterReading;
    let newReading = this.newMeterReading;
    let meterDate = this.meterChangedDate;
    Object.keys(this.vehicleMaintenanceData).forEach(function(key) {
      if(vData[key].runKilometer != undefined && key != "speedoMeter") {
        vData[key].runKilometer =  Number(newReading) - (oldReading - vData[key].runKilometer)
      }
    });
    this.vehicleMaintenanceData.speedoMeter.runKilometer =  oldReading;
    this.vehicleMaintenanceData.speedoMeter.avgKilometer =  newReading;
    this.vehicleMaintenanceData.speedoMeter.changedDate = meterDate;     
    this.modalRef.hide();
  }
}
