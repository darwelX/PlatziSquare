import { LugaresService } from '../services/lugares.service';
import { Component, OnInit } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';
import { registerLocaleData } from '@angular/common';
import  swal  from 'sweetalert';
import { LOCALE_ID } from '@angular/core';
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
    registerLocaleData(localeEs, 'es', localeEsExtra);
    this.lugaresServices.getLugares()
    .subscribe(lugares => {
      if(lugares.status == 200){
        let obj = lugares.json();
        this.lugares= Object.keys(obj).map( (key) => { return obj[key]; });
        //this.lugares = Object.keys(this.lugares).map((key) => this.lugares[key]);
      }else{
        swal('A ocurrido un Error', 'Codigo '+lugares.status, 'error');
      }
    }, error => {
      swal('A ocurrido un Error '+ error.statusText, 'Codigo '+error.status, 'error');
    });

    /**
     * metodo formateado
     */
    // this.lugaresServices.getAll()
    // .subscribe(lugares => {
    //   let obj = lugares;
    //   this.lugares= Object.keys(obj).map( (key) => { return obj[key]; });
    // });
  }

  ngOnInit() {
  }

}
