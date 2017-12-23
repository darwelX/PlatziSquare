import { LugaresService } from '../services/lugares.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  id = null;
  lugar: any = {};
  lugares: any = null;
  //en la clase ActivateRoute se resiven parametros
  constructor(private route: ActivatedRoute, private lugaresServices: LugaresService) { 
    this.lugares = lugaresServices.getLugares();
    console.log(this.route.snapshot.params['id']);
    console.log(this.route.snapshot.queryParams['action']);
    this.id = this.route.snapshot.params['id'];
    this.lugar = lugaresServices.buscarLugar(this.id);
  }

  ngOnInit() {
  }
}
