import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReserveDetailsComponent } from './reserve-details.component';

const routes: Routes = [{ path: '', component: ReserveDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReserveDetailsRoutingModule { }
