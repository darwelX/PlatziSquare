import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  lat:number = 8.215178;
  lng:number = -72.257524;

  lugares = [
    {plan: 'pagado', activo: true, cercania:1 , distancia: 1, nombre: "Pizzeria y Hamburguesas Don Pedrito"},
    {plan: 'gratuito', activo: false,cercania:2 , distancia: 5, nombre: "Veterinaria Kaninos"},
    {plan: 'gratuito', activo: true, cercania:3 , distancia: 110, nombre: "Restaurant la Cotorra"},
    {plan: 'gratuito', activo: true, cercania:1 , distancia: 2, nombre: "El Universo del Churro"},
  ]
}
