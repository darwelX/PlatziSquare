import { LugaresService } from '../services/lugares.service';
import { Component, OnInit } from '@angular/core';
import  swal  from 'sweetalert';
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
    .subscribe(lugares => {
      if(lugares.status == 200){
        this.lugares = lugares.json();
        this.lugares = Object.keys(this.lugares).map((key) => this.lugares[key]);
      }else{
        swal('A ocurrido un Error', 'Codigo '+lugares.status, 'error');
      }
    });
  }

  ngOnInit() {
  }

}
