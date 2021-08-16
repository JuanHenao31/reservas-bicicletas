import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReserveListRoutingModule } from './reserve-list-routing.module';
import { ReserveListComponent } from './reserve-list.component';


@NgModule({
  declarations: [
    ReserveListComponent
  ],
  imports: [
    CommonModule,
    ReserveListRoutingModule
  ]
})
export class ReserveListModule { }
