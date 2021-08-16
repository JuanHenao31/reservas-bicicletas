import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReserveEditRoutingModule } from './reserve-edit-routing.module';
import { ReserveEditComponent } from './reserve-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReserveFormModule } from 'src/app/shared/components/reserve-form/reserve-form.module';



@NgModule({
  declarations: [
    ReserveEditComponent
  ],
  imports: [
    CommonModule,
    ReserveEditRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ReserveFormModule

  ]
})
export class ReserveEditModule { }
