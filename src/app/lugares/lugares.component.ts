import { LugaresService } from '../services/lugares.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {
  lat:number = 8.215178;
  lng:number = -72.257524;
  lugares: any = null;
  constructor(private lugaresServices: LugaresService) { 
    this.lugaresServices.getLugares()
    .valueChanges().subscribe(lugares => {
      this.lugares = lugares;
    });
  }

  ngOnInit() {
  }

}
