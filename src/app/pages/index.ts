import { PagesComponent } from './pages.component';
import { VehicleInfoComponent } from './vehicleinfo/vehicleinfo.component';
import { VehicleMaintenanceComponent } from './maintenance/vehiclemaintenance.component';
import { VehicleMaintenanceUpdateComponent } from './maintenance/vehiclemainviewupdate/vehicle-maintenance-update.component';
import { VendorInfoComponent } from './vendorinfo/vendorinfo.component';
import { VehiclePaymentComponent } from './vehiclepayment/vehiclepayment.component';
import { VendorPaymentComponent } from './vendorpayment/vendorpayment.component';
import { TripInfoComponent } from './tripinfo/tripinfo.component';
import { TripInfoLineComponent } from './tripinfoline/tripinfoline.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VehicleTripComponent } from './vehiclepayment/vehicletrip/vehicletrip.component';
import { VendorTripComponent } from './vendorpayment/vendortrip/vendortrip.component';
import { TripInsertUpdateComponent } from './tripinfo/trip-insert-update/trip-insert-update.component';
import { TripLineInsertUpdateComponent } from './tripinfoline/tripline-insert-update/tripline-insert-update.component';
import { OfficeInfoComponent } from './officeinfo/office.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { VehicleViewUpdateComponent } from "./vehicleinfo/vehicleviewupdate/vehicle-view-update.component";
import { DriverInfoComponent } from "./driverinfo/driverinfo.component";

export const PagesComponentBarrel = [
PagesComponent, VehicleInfoComponent, VehicleMaintenanceComponent, VendorInfoComponent, VehiclePaymentComponent,
VendorPaymentComponent, TripInfoComponent, TripInsertUpdateComponent, DashboardComponent,
VehicleTripComponent, VendorTripComponent, OfficeInfoComponent, VehicleMaintenanceUpdateComponent,
VehicleViewUpdateComponent, ExpensesComponent, DriverInfoComponent,
TripInfoLineComponent, TripLineInsertUpdateComponent,];

