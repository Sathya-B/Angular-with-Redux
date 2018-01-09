import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { IAppState } from '../../store/store';
import { NgRedux, select } from 'ng2-redux';
import * as Const from '../../store/actions';
import { Vehicle } from './Vehicle.model';
import { NgForm } from '@angular/forms';
import { VehicleViewService } from '../../service/vehicleview.service';
import { DriverViewService } from "../../service/driverview.service";
import * as _ from 'underscore';

@Component({
  selector: 'app-vehicleinfo',
  templateUrl: './vehicleinfo.component.html',
  styleUrls: ['./vehicleinfo.component.css']
})
export class VehicleInfoComponent implements OnInit {

  vehicleData: Vehicle;  
  editVehicleinfoView = false;
  modalRef: BsModalRef;
  formAction: string;
  public driverData: any[] = [];
  @select('vehicleInfo') vehicleViewData;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private data: VehicleViewService,
    private modalService: BsModalService,
    private driverSer: DriverViewService
  ) {
    this.vehicleData = new Vehicle();
 }

  ngOnInit() {
    this.listVehicle();
    this.getDriverList();
    this.ngRedux.subscribe(() => {
    this.driverData = _.map(this.ngRedux.getState().driverInfo, (v: any) => {
          return this.driverData = v.driverName;
    });
    });
  }

  listVehicle() {
    this.data.getVechile();
  }

  crudType(action, vehicle?) {
    console.log(action);
    if (action === 'add') {
      this.formAction = 'Add';
      this.vehicleData = new Vehicle();
    } else {
      this.formAction = 'Edit';
      this.vehicleData = vehicle;
    }
  }

  insertVehicle(vehicle) {
    this.data.addVechile(vehicle);
  }

  updateVehicle(vehicle) {
    this.data.updateVechile(vehicle);
  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.ngRedux.subscribe(() => {    
    if( this.ngRedux.getState().modal == Const.UPDATED_CLOSE_MODAL) {
      this.modalRef.hide();
    }  
    })
  }

  getDriverList(){
    this.driverSer.getDriver();
  }
}
