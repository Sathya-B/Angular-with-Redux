import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { VehicleViewService } from "../../../service/vehicleview.service";
import { NgRedux } from 'ng2-redux';
import { IAppState } from "../../../store/store";
import * as Const from '../../../store/actions';
import { FileHolder, UploadMetadata } from "angular2-image-upload";
import { NgForm } from "@angular/forms/forms";
import { TokenService } from "../../../service/token.service";
import * as urls from '../../../config/configuration';

@Component({
  selector: 'app-vehicle-view-update',
  templateUrl: './vehicle-view-update.component.html',
  styleUrls: ['./vehicle-view-update.component.css']
})
export class VehicleViewUpdateComponent implements OnInit {
  
  @Input() public vehicleData: any;
  @Input()  public driverData: any[];
  @Output() cancelClicked = new EventEmitter<boolean>();
  authHeader: any = { Authorization: ""};
  vehicleNum: string = "";
  imgupload: string = urls.imgurl;
  imgs3url: string;
  constructor(private vehicleViewService: VehicleViewService, private ngRedux: NgRedux<IAppState>,
              private tokenService: TokenService ) {
    
   }
  
  ngOnInit() {
  this.tokenService.getAuthToken().then((token)=> {
        this.authHeader.Authorization = "Bearer " + token;;
    })
    .catch((error) => {
      console.log(error);
    });
    this.vehicleNum = this.vehicleData.vehicleNo.replace(/[ ]/g, '');
    this.imgs3url = 'https://s3.ap-south-1.amazonaws.com/jttvehicle/' + this.vehicleNum;
}

  closeItem(event: any) {
      this.cancelClicked.emit(true);
  }
  updateVehicle(vehicle: any) {
   this.vehicleViewService.updateVechile(vehicle);
   this.ngRedux.subscribe(() => {
    if( this.ngRedux.getState().modal == Const.UPDATED_CLOSE_MODAL) {
      this.cancelClicked.emit(true);
    }
    })
  }
    onUploadFinished(file: FileHolder) {
    console.log(JSON.parse(file.serverResponse['_body']).data);
  }

  onBeforeUpload(form: NgForm, name: any) {
    return (metadata: UploadMetadata) => {
        metadata.formData = {
          'objectName': (form.value.vehicleNo).replace(/[ ]/g, '') + name,
          'bucketName': 'jttvehicle'
        }
        console.log(metadata);
        return metadata;
    }
  }
}
