import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ReserveFormComponent } from './reserve-form.component';



@NgModule({
  declarations: [ReserveFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [ ReserveFormComponent ]
})
export class ReserveFormModule { }
