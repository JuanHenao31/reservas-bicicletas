import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReserveNewRoutingModule } from './reserve-new-routing.module';
import { ReserveNewComponent } from './reserve-new.component';
import { ReserveFormModule } from 'src/app/shared/components/reserve-form/reserve-form.module';


@NgModule({
  declarations: [
    ReserveNewComponent
  ],
  imports: [
    CommonModule,
    ReserveNewRoutingModule,
    ReserveFormModule
  ]
})
export class ReserveNewModule { }
