import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { IAppState } from '../../store/store';
import { NgRedux, select } from 'ng2-redux';
import * as Const from '../../store/actions';
import { VehicleMaintenance } from './vehiclemaintenance.model';
import { NgForm } from '@angular/forms';
import { VehicleMaintenanceService } from '../../service/vehiclemaintenance.service';
import { DriverViewService } from "../../service/driverview.service";
import * as _ from 'underscore';

@Component({
  selector: 'app-vehiclemaintenance',
  templateUrl: './vehiclemaintenance.component.html',
  styleUrls: ['./vehiclemaintenance.component.css']
})
export class VehicleMaintenanceComponent implements OnInit {

  maintenanceData: VehicleMaintenance;  
  editVehicleinfoView = false;
  modalRef: BsModalRef;
  formAction: string;

  @select('vehicleMaintenanceInfo') vehicleMaintenanceInfo;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private data: VehicleMaintenanceService,
    private modalService: BsModalService
  ) {
    this.maintenanceData = new VehicleMaintenance();
 }

  ngOnInit() {
    this.getMaintenanceInfo();
  }

  getMaintenanceInfo() {
    this.data.getVechileMaintenance();
  }

  crudType(action, vehicle?) {
    console.log(action);
    if (action === 'add') {
      this.formAction = 'Add';
      this.maintenanceData = new VehicleMaintenance();
    } else {
      this.formAction = 'Edit';
      this.maintenanceData = vehicle;
    }
  }

  insertVehicle(vehicle) {
    this.data.addVechile(vehicle);
  }

  updateVehicle(vehicle) {
    this.data.updateVechileMaintenance(vehicle);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.ngRedux.subscribe(() => {    
    if( this.ngRedux.getState().modal == Const.UPDATED_CLOSE_MODAL) {
      this.modalRef.hide();
    }  
    })
  }
}
