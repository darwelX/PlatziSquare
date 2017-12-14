import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  listo = true;
  boton = 'btn';
  contador = 0;
  nombre="";
  genero = "Mr";
  constructor(){
    setTimeout(()=>{
      this.listo = false;
    }, 3000)
  }

  sumar(){
    this.contador++;
  }

  set(event){
    console.log('hola');
    this.contador = event.target.value;
  }
}
