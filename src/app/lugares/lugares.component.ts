import { LugaresService } from '../services/lugares.service';
import { Component, OnInit } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';
import { registerLocaleData } from '@angular/common';
import  swal  from 'sweetalert';
import { LOCALE_ID } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css'],
  animations: [
    trigger('contenedorAnimable', [
      state('inicial', style({
        opacity: 0
      })),
      state('final', style({
        opacity: 1,      
      })),
      transition('inicial => final',animate(5000)),
      transition('final => inicial',animate(1000))
    ]),
    trigger('contenedorStar', [
      state('small', style({
        opacity: 0,
        transform: 'scale(.5)'
      })),
      state('big', style({
        opacity: 1,
        transform: 'scale(1)'      
      })),
      transition('small => big',animate(3000)),
      transition('big => small',animate(500))
    ]),   
  ]
})
export class LugaresComponent implements OnInit {
  lat:number = 8.215178;
  lng:number = -72.257524;
  lugares: any = null;
  // state='inicial';

  // animar(){
  //   this.state = (this.state=='inicial') ? 'final' : 'inicial';
  // }

  // animacionIniciada(event){
  //   console.log('iniciada',event);
  // }

  // animacionTerminada(event){
  //   this.animateStateStar = 'big';
  //   console.log('terminada', event);
  // }
  constructor(private lugaresServices: LugaresService) { 
    registerLocaleData(localeEs, 'es', localeEsExtra);
    this.lugaresServices.getLugares()
    .valueChanges().subscribe(lugares => {
      // if(lugares.status == 200){
        // let obj = lugares.json();
        // this.lugares= Object.keys(obj).map( (key) => { return obj[key]; });
        //this.lugares = Object.keys(this.lugares).map((key) => this.lugares[key]);
        // this.state='final';
      // }else{
      //   swal('A ocurrido un Error', 'Codigo '+lugares.status, 'error');
      // }
      this.lugares = lugares;
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
