import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'reserve-list', loadChildren: () => import('./feature/reserves/reserve-list/reserve-list.module').then(m => m.ReserveListModule) },
{ path: 'reserve-new', loadChildren: () => import('./feature/reserves/reserve-new/reserve-new.module').then(m => m.ReserveNewModule) }, 
{ path: 'reserve-details', loadChildren: () => import('./feature/reserves/reserve-details/reserve-details.module').then(m => m.ReserveDetailsModule) }, 
{ path: 'reserve-edit', loadChildren: () => import('./feature/reserves/reserve-edit/reserve-edit.module').then(m => m.ReserveEditModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
