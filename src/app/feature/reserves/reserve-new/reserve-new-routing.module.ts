import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReserveNewComponent } from './reserve-new.component';

const routes: Routes = [{ path: '', component: ReserveNewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReserveNewRoutingModule { }
