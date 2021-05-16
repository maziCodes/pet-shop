import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { FilterCustomersComponent } from './filter-customers/filter-customers.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    FilterCustomersComponent,
    AddCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ReactiveFormsModule
  ]
})
export class CustomersModule { }
