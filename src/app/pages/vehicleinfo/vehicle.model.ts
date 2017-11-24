import { Injectable } from "@angular/core";

@Injectable()
export class Vehicle{
  
  id: number;  
  vehicleNo: string;
  vehicleType: string;
  vehicleNoWheel: number;
  vehicleCapacity: string;

  constructor(
    _id?: number,
      _vehicleNo?: string,
      _vehicleType?: string,
      _vehicleNoWheel?: number,
      _vehicleCapacity?: string
  ){
       this.id = _id || null,
       this.vehicleNo = _vehicleNo || null,
       this.vehicleType = _vehicleType || null,
       this.vehicleNoWheel = _vehicleNoWheel || null,
       this.vehicleCapacity = _vehicleCapacity || null
  }

}