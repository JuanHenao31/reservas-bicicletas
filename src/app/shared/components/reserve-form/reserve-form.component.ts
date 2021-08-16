import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReserveService } from 'src/app/feature/reserves/service/reserve.service';
import { Reserve } from '../../models/reserve.interface';

@Component({
  selector: 'app-reserve-form',
  templateUrl: './reserve-form.component.html',
  styleUrls: ['./reserve-form.component.css']
})
export class ReserveFormComponent implements OnInit {

  reserve: Reserve;

  editReserveForm: FormGroup;
  
  constructor(private router: Router, private fb: FormBuilder, private _reserveService : ReserveService) {
    const navigation = this.router.getCurrentNavigation();
    this.reserve = navigation?.extras?.state?.value;

    this.editReserveForm = this.fb.group({
      client: ['', Validators.required],
      idBikes: ['', Validators.required],
      valuePerHour: ['',Validators.required],
      documentNumber: ['',Validators.required],
      departureTime: [''],
      arriveTime: [''],
      totalValue: ['',Validators.required],
      commision: ['',Validators.required],
      finalValue: ['',Validators.required]
    })

  }

  ngOnInit(): void {
    if (typeof this.reserve === 'undefined') {
      this.router.navigate(['reserve-new']);
    } else {
      this.editReserveForm.patchValue(this.reserve);
    }
  }

  onSave(): void {
    console.log('Saved', this.editReserveForm.value);
    if (this.editReserveForm.valid) {
      console.log('Saved', this.editReserveForm.value);

      const reserve = this.editReserveForm.value;
      const reserveId = this.reserve?.id || undefined;
      this._reserveService.onSaveReserve(reserve, reserveId);
      this.editReserveForm.reset();
    }

  }


  EditReserve() {

  }

}
