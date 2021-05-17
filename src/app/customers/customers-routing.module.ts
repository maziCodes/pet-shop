import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FilterCustomersComponent} from "./filter-customers/filter-customers.component";
import {AddCustomerComponent} from "./add-customer/add-customer.component";
import {CustomerDetailsComponent} from "./customer-details/customer-details.component";

const routes: Routes = [
  {
    path: 'search',
    component: FilterCustomersComponent
  },
  {
    path: 'new',
    component: AddCustomerComponent
  },
  {
    path: 'details',
    component: CustomerDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
