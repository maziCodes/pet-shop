import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { FilterCustomersComponent } from './filter-customers/filter-customers.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import {ReactiveFormsModule} from "@angular/forms";
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import {IConfig, NgxMaskModule} from "ngx-mask";

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  declarations: [
    FilterCustomersComponent,
    AddCustomerComponent,
    CustomerDetailsComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfigFunction),
  ]
})
export class CustomersModule { }
