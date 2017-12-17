import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './directives/resaltar.directive';

@NgModule({
  //en este array se agregan los componentes propios que conforman el modulo
  declarations: [
    AppComponent,
    ResaltarDirective
  ],

  //se importa los modulas nativos de angular que va a necesitar la aplicacion
  imports: [
    BrowserModule,
    //necesario para usar el data binding bidireccional
    FormsModule,
    // modulo de google maps
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD_WGF3n-7hURPte4-4LXr7uSEHZJXXAKg'
    })
  ],

  //se declaran los servicios propios que se van a necesitar en la aplicacion
  providers: [],

  //se declara con que componente se va a iniciar
  bootstrap: [AppComponent]
})
export class AppModule { }
