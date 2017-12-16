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
    {activo: true, nombre: "Pizzeria y Hamburguesas Don Pedrito"},
    {activo: false, nombre: "Veterinaria Kaninos"},
    {activo: true, nombre: "Restaurant la Cotorra"},
    {activo: true, nombre: "El Universo del Churro"},
  ]
}
