import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReserveListComponent } from './reserve-list.component';

const routes: Routes = [{ path: '', component: ReserveListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReserveListRoutingModule { }
