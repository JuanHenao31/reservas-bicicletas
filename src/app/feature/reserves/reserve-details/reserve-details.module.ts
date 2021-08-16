import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReserveDetailsRoutingModule } from './reserve-details-routing.module';
import { ReserveDetailsComponent } from './reserve-details.component';


@NgModule({
  declarations: [
    ReserveDetailsComponent
  ],
  imports: [
    CommonModule,
    ReserveDetailsRoutingModule
  ]
})
export class ReserveDetailsModule { }
