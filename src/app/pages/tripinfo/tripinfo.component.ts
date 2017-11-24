import { Component, OnInit, TemplateRef } from '@angular/core';
import { TripService } from '../../service/trip.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Trip } from './trip-insert-update/trip.model';

@Component({
  selector: 'app-tripinfo',
  templateUrl: './tripinfo.component.html',
  styleUrls: ['./tripinfo.component.css']
})
export class TripInfoComponent implements OnInit {

  tripInfoViewData: any;
  modalRef: BsModalRef;
  public tripData : Trip;
  constructor(
    private tripServ : TripService,
    private modalService: BsModalService
  ) { 
    this.tripData = new Trip();
  }

  ngOnInit() {
    this.getTriplist();
  }

  getTriplist(){
    this.tripServ.getTripInfo()
    .subscribe((tripRes)=>{
      this.tripInfoViewData = tripRes;
    })
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  addTrip(){
    this.tripData = new Trip();
  }

}
