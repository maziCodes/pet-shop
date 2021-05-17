import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldErrorComponent } from './field-error/field-error.component';



@NgModule({
  declarations: [FieldErrorComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FieldErrorComponent
  ]
})
export class SharedModule { }
