import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

@NgModule({
  //en este array se agregan los componentes propios que conforman el modulo
  declarations: [
    AppComponent
  ],

  //se importa los modulas nativos de angular que va a necesitar la aplicacion
  imports: [
    BrowserModule
  ],

  //se declaran los servicios propios que se van a necesitar en la aplicacion
  providers: [],

  //se declara con que componente se va a iniciar
  bootstrap: [AppComponent]
})
export class AppModule { }