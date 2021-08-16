import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReserveEditComponent } from './reserve-edit.component';

const routes: Routes = [{ path: '', component: ReserveEditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReserveEditRoutingModule { }
