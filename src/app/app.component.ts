import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  lugares = [
    {activo: true, nombre: 'Floreria Gardemia'},
    {activo: true, nombre: 'Donas Pasadita'},
    {activo: true, nombre: 'Veterinaria Huellitas Felices'},
    {activo: true, nombre: 'Sushi Roll'},
    {activo: true, nombre: 'Hotel la Gracia'},
    {activo: true, nombre: 'Zapateria el clavo'},
  ]
  constructor(){
  }

  quitar(_index){
    console.log(_index);
    this.lugares[_index].activo = false;
  }
}
