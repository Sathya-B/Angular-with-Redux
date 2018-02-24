import { Injectable } from "@angular/core";

@Injectable()
export class VehicleMaintenance{
  
  id: number;  
  vehicleId: string;  
  vehicleNo: string;
  runKm: number;
  oilService: ServiceData;
  wheelGrease: ServiceData;  
  airFilter: ServiceData;
  clutchPlate: ServiceData;
  gearOil: ServiceData;
  crownOil: ServiceData;
  selfMotor: ServiceData;
  dynamo: ServiceData;
  radiator: ServiceData;
  pinPush: ServiceData;
  steeringOil: ServiceData;
  nozzleService: ServiceData;
  speedoMeter: ServiceData;
  dieselFilter: ServiceData;
  stainner: ServiceData;
  tyrePowder: ServiceData;
  valveChecker: ServiceData;
  coolantOil: ServiceData;
  isActive: boolean;

  constructor() {
    this.id = null;
    this.vehicleId = null;
    this.vehicleNo = null;
    this.runKm = null;
    this.oilService = new ServiceData();
    this.wheelGrease = new ServiceData();
    this.airFilter = new ServiceData();
    this.clutchPlate = new ServiceData();
    this.gearOil = new ServiceData();
    this.crownOil = new ServiceData();
    this.selfMotor = new ServiceData();
    this.dynamo = new ServiceData();
    this.radiator = new ServiceData();
    this.pinPush = new ServiceData();
    this.steeringOil = new ServiceData();
    this.nozzleService = new ServiceData();
    this.speedoMeter = new ServiceData();
    this.dieselFilter = new ServiceData();
    this.stainner = new ServiceData();
    this.tyrePowder = new ServiceData();
    this.valveChecker = new ServiceData();
    this.coolantOil = new ServiceData();
    this.isActive = null;
  }
}

export class ServiceData {
  runKilometer: number;
  avgKilometer: number;
  changedDate: string;
  constructor(){
    this.runKilometer = 0;
    this.avgKilometer = 0;
    this.changedDate = null;
  }
}