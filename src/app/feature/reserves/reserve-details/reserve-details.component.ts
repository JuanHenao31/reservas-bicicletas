import { Component, OnInit } from '@angular/core';
import { Reserve } from 'src/app/shared/models/reserve.interface';

@Component({
  selector: 'app-reserve-details',
  templateUrl: './reserve-details.component.html',
  styleUrls: ['./reserve-details.component.css']
})
export class ReserveDetailsComponent implements OnInit {

  constructor() { }

  reserves!: Reserve;
  
  ngOnInit(): void {
    
  }

}
