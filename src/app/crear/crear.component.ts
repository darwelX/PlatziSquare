import { LugaresService } from '../services/lugares.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  lugar: any = {};

  constructor(private lugaresServices: LugaresService) { }

  ngOnInit() {
  }

  crear(){
    this.lugaresServices.guardarLugar(this.lugar);
    // console.log(this.lugar);
  }
}
