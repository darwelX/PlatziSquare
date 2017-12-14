import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  lugares:any = [
    {nombre: 'Floreria Gardenia'},
    {nombre: 'Donas las Sabrocitas'},
    {nombre: 'Veterinario Kaninos'},
  ]
  constructor(){

  }
}
