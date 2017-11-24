import { Injectable } from "@angular/core";

@Injectable()

export class Trip {
    
        id: number;
        loadDate: string;
        vehicleNo: string;
        location: location;
        vendorName: string;
        ton: string;
        rate: number;
        totalAmt: number;
        crossing: number;
        vehicleAmt: number;
        typeofPayment: string;
        advanceAmt: number;
        advance: advance;
        toPay: toPay;        
    

    constructor(
        _id?: number,
        _loadDate?: string,
        _vehicleNo?: string,
        _location?: location,
        _vendorName?: string,
        _ton?: string,
        _rate?: number,
        _totalAmt?: number,
        _crossing?: number,
        _vehicleAmt?: number,
        _typeofPayment?: string,
        _advanceAmt?: number,
        _advance?: advance,
        _toPay?: toPay
        
    ) {
        this.id = _id || null,
        this.loadDate= _loadDate || null,
        this.vehicleNo= _vehicleNo || null,
        this.location= _location || null,
        this.vendorName = _vendorName || null,
        this.ton = _ton || null,
        this.rate = _rate || null,
        this.totalAmt = _totalAmt || null,
        this.crossing = _crossing || null,
        this.vehicleAmt = _vehicleAmt || null,
        this.typeofPayment = _typeofPayment || null,
        this.advanceAmt = _advanceAmt || null,
        this.advance =  _advance || null ,
        this.toPay = _toPay || null
        
    }


}



export class location{
    from: string;
    to: string;
    thaluka: string;
    constructor(
        _from?:string,
        _to?:string,
        _thaluka?:string
    ){
      this.from = _from || null,
      this.to = _to || null,
      this.thaluka = _thaluka || null  
    }


}

export class advance{
    driverAccepted: number;
    selfAccount: number;
    paid: number;
    balance: number;

    constructor(
        _driverAccepted?: number,
        _selfAccount?: number,
        _paid?: number,
        _balance?: number

    ){
        this.driverAccepted = _driverAccepted || null,
        this.balance = _balance || null,
        this.selfAccount = _selfAccount || null,
        this.paid = _paid || null    
    }
}

export class toPay{

}