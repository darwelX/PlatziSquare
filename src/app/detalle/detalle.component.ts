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
  lugares = [
    {id: 1, plan: 'pagado', activo: true, cercania:1 , distancia: 1, nombre: "Pizzeria y Hamburguesas Don Pedrito", descripcion: 'Las mejores pizzas hechas a la leña con el mejor sabor y variedad'},
    {id: 2, plan: 'gratuito', activo: false,cercania:2 , distancia: 5, nombre: "Veterinaria Kaninos", descripcion: 'Consiente a tu mascota para ello tenemos espa, baños especiales y de mas atenciones'},
    {id: 3, plan: 'gratuito', activo: true, cercania:3 , distancia: 110, nombre: "Restaurant la Cotorra", descripcion: 'Los mejores almuerzos con platillos espciales a la carta los mas sabrosos de la ciudad'},
    {id: 4, plan: 'gratuito', activo: true, cercania:1 , distancia: 2, nombre: "El Universo del Churro", descripcion: 'El universo del churro te ofrece un mundo de sabores con la mejor bariedad de acompañantes y bebidas'},
  ]
  //en la clase ActivateRoute se resiven parametros
  constructor(private route: ActivatedRoute) { 
    console.log(this.route.snapshot.params['id']);
    console.log(this.route.snapshot.queryParams['action']);
    this.id = this.route.snapshot.params['id'];
    this.lugar = this.buscarLugar();
  }

  ngOnInit() {
  }

  buscarLugar(){
    return this.lugares.filter((lugar)=>{return lugar.id == this.id})[0] || null;
  }
}
