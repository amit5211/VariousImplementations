import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicFormRoutingModule } from './basic-form-routing.module';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { CustomFormControlModule } from '../custom-form-control/custom-form-control.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BasicFormComponent
  ],
  imports: [
    CommonModule,
    CustomFormControlModule,
    BasicFormRoutingModule,
    ReactiveFormsModule
  ]
})
export class BasicFormModule { }
