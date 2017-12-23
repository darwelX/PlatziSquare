import { LugaresService } from '../services/lugares.service';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';

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
    this.lugar.id = Date.now();
    this.lugar.activo = true;
    this.lugaresServices.guardarLugar(this.lugar);
    swal('Registro guardado', 'Ok', 'success');
    this.lugar = {};
    // console.log(this.lugar);
  }
}
