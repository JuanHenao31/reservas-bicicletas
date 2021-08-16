import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { ReserveService } from '../service/reserve.service';



@Component({
  selector: 'app-reserve-list',
  templateUrl: './reserve-list.component.html',
  styleUrls: ['./reserve-list.component.css']
})
export class ReserveListComponent implements OnInit {


  reserves$ = this._reserveService.reserves


  constructor(private router: Router, private toastr: ToastrService, private _reserveService:ReserveService) { }

  navigationExtras: NavigationExtras = {
    state :{
      value : null 
    }
  }

  ngOnInit(): void {
  }



  onGoToSee(item: any): void {
    
    this.router.navigate(['reserve-details', {item}])
  }

  async onGoToDelete(empId: any): Promise<void> {
    try {
      await this._reserveService.onDeleteReserves(empId);
      this.toastr.error('La reserva fue eliminada con exito', 'Registro eliminado!', {
        positionClass: 'toast-bottom-right'
      });
    } catch (err) {
      console.log(err);
    }
  }
}
