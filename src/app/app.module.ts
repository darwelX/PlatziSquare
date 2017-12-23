import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import {Routes, RouterModule} from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LugaresService } from './services/lugares.service';

const appRoutes: Routes = [
  {path: '', component: LugaresComponent},
  {path: 'lugares', component: LugaresComponent},
  {path: 'detalles/:id', component: DetalleComponent},
  {path: 'lugares', component: LugaresComponent},
  {path: 'contacto', component: ContactoComponent}
];

@NgModule({
  //en este array se agregan los componentes propios que conforman el modulo
  declarations: [
    AppComponent,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent
  ],

  //se importa los modulas nativos de angular que va a necesitar la aplicacion
  imports: [
    BrowserModule,
    //necesario para usar el data binding bidireccional
    FormsModule,
    // modulo de google maps
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD_WGF3n-7hURPte4-4LXr7uSEHZJXXAKg'
    }),
   BrowserAnimationsModule,
   RouterModule.forRoot(appRoutes)

  ],

  //se declaran los servicios propios que se van a necesitar en la aplicacion
  providers: [
    LugaresService
  ],

  //se declara con que componente se va a iniciar
  bootstrap: [AppComponent]
})
export class AppModule { }
