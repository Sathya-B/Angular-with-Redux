import { Injectable } from "@angular/core";

@Injectable()
export class VehicleMaintenance{
  
  id: number;  
  vehicleId: string;  
  vehicleNo: string;
  runKm: number;
  oilService: number;
  wheelGrease: number;  
  airFilter: number;
  clutchPlate: number;
  gearOil: number;
  crownOil: number;
  selfMotor: number;
  dynamo: number;
  radiator: number;
  pinPush: number;
  steeringOil: number;
  isActive: boolean;
}