import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { PagesComponent } from './pages/pages.component';
// import { AuthGuard } from './shared';
import { VehicleInfoComponent } from './pages/vehicleinfo/vehicleinfo.component';
import { VehicleMaintenanceComponent } from './pages/maintenance/vehiclemaintenance.component';
import { VendorInfoComponent } from './pages/vendorinfo/vendorinfo.component';
import { VehiclePaymentComponent } from './pages/vehiclepayment/vehiclepayment.component';
import { VendorPaymentComponent } from './pages/vendorpayment/vendorpayment.component';
import { TripInfoComponent } from './pages/tripinfo/tripinfo.component';
import { TripInfoLineComponent } from './pages/tripinfoline/tripinfoline.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OfficeInfoComponent } from './pages/officeinfo/office.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { DriverInfoComponent } from "./pages/driverinfo/driverinfo.component";
import { AuthGuard } from './shared/authguard';

export const routes: Routes = [
  { path:'', component: LoginComponent },
  { path:'pages', component: PagesComponent,
    children:[
      {path:'expenses', component: ExpensesComponent},
      {path:'vehicleinfo', component: VehicleInfoComponent},
      {path:'maintenance', component: VehicleMaintenanceComponent},
      {path:'vendorinfo', component: VendorInfoComponent },
      {path:'officeinfo', component: OfficeInfoComponent },
      {path:'driverinfo', component: DriverInfoComponent },
      {path:'vehiclepayment', component: VehiclePaymentComponent },
      {path:'vendorpayment', component: VendorPaymentComponent },
      {path:'tripinfo', component: TripInfoComponent },
      {path:'tripinfoline', component: TripInfoLineComponent },      
      {path:'dashboard', component: DashboardComponent },
      {path:'', component: DashboardComponent }
    ], canActivate: [AuthGuard]
   }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
