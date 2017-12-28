import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import {Routes, RouterModule} from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HttpModule } from '@angular/http';

import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LugaresService } from './services/lugares.service';
import { environment } from '../environments/environment';
import { CrearComponent } from './crear/crear.component';
import { LinkifystrPipe } from './pipes/linkifystr.pipe';
import { FilterPipe } from './pipes/filter.pipe';

const appRoutes: Routes = [
  {path: '', component: LugaresComponent},
  {path: 'lugares', component: LugaresComponent},
  {path: 'detalles/:id', component: DetalleComponent},
  {path: 'lugares', component: LugaresComponent},
  {path: 'crear', component: CrearComponent},
  {path: 'crear/:id', component: CrearComponent},
  {path: 'contacto', component: ContactoComponent}
];

@NgModule({
  //en este array se agregan los componentes propios que conforman el modulo
  declarations: [
    AppComponent,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent,
    LinkifystrPipe,
    FilterPipe
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
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase, 'PlaziSquare'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AngularFireDatabaseModule,
    HttpModule
  ],

  //se declaran los servicios propios que se van a necesitar en la aplicacion
  providers: [
    LugaresService
  ],

  //se declara con que componente se va a iniciar
  bootstrap: [AppComponent]
})
export class AppModule { }
