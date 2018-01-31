import { VehicleViewService } from './vehicleview.service';
import { VendorViewService } from './vendorview.service';
import { VehicleMaintenanceService } from './vehiclemaintenance.service';
import { OfficeViewService } from './officeview.service';
import { VehicleAmountService } from './vehicleamount.service';
import { VendorAmountService } from './vendoramount.service';
import { TripService } from './trip.service';
import { LocationService } from './location.service';
import { ApiService } from './api.service';
import { TokenService } from './token.service';

import { AppState } from '../app.service';
import { TripExpensesService } from './tripexpenses.service';
import { DriverViewService } from "./driverview.service";
import { LoginLogoutService } from "./loginlogout.service";

export const ServicesBarrel = [
    VehicleViewService, VendorViewService, VehicleAmountService, VehicleMaintenanceService,
    VendorAmountService, TripService, LocationService, ApiService, TokenService,

    OfficeViewService,AppState,TripExpensesService, DriverViewService, LoginLogoutService];
