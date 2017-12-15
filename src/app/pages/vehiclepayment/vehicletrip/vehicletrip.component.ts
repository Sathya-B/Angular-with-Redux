import { Component, OnInit, Input, OnDestroy, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { NgForm } from "@angular/forms/src/forms";
import { TripService } from "../../../service/trip.service";
import { NgRedux } from "ng2-redux/lib";
import { IAppState } from "../../../store/store";
import * as Const from '../../../store/actions';

@Component({
  selector: 'app-vehicletrip',
  templateUrl: './vehicletrip.component.html',
  styleUrls: ['./vehicletrip.component.css']
})
export class VehicleTripComponent implements OnInit, OnDestroy {
@Input() tripData;
@Input() itemIndex;
modalRef: BsModalRef;

log(event: boolean) {
  console.log(`Accordion has been ${event ? 'opened' : 'closed'}`);
}
  constructor(
    private modalService: BsModalService,
    private tripService: TripService,
    private ngRedux: NgRedux<IAppState>
  ) { }

  ngOnInit() {
   // console.log(this.tripData)
   this.ngRedux.subscribe(()=> {
     if(this.ngRedux.getState().modal == Const.UPDATED_CLOSE_MODAL) {
       if(this.modalRef != undefined) {
        this.modalRef.hide();
       }
     }
   })
  }
  ngOnDestroy(){
    
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.tripService.updatePayment(this.tripData.tripId, form.value);
  }

  openModal(template: TemplateRef<any>) {    
    this.modalRef = this.modalService.show(template);
  }

}
