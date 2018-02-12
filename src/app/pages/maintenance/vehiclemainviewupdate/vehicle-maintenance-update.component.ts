import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { VehicleMaintenanceService } from "../../../service/vehiclemaintenance.service";
import { NgRedux } from 'ng2-redux';
import { IAppState } from "../../../store/store";
import * as Const from '../../../store/actions';
import { FileHolder, UploadMetadata } from "angular2-image-upload";
import { NgForm } from "@angular/forms/forms";
import { TokenService } from "../../../service/token.service";
import * as urls from '../../../config/configuration';

@Component({
  selector: 'app-vehicle-maintenance-update',
  templateUrl: './vehicle-maintenance-update.component.html',
  styleUrls: ['./vehicle-maintenance-update.component.css']
})
export class VehicleMaintenanceUpdateComponent implements OnInit {
  
  @Input() public vehicleMaintenanceData: any;
  @Output() cancelClicked = new EventEmitter<boolean>();
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
  speedoMeterRange: number = 120000;
  dieselFilterRange: number = 120000;
  stainnerRange: number = 120000;
  tyrePowderRange: number = 120000;
  valveCheckerRange: number = 120000;

  constructor(private vehicleMaintenanceService: VehicleMaintenanceService, private ngRedux: NgRedux<IAppState>) {
    
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
}
