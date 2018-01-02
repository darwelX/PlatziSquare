// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
import { DetalleComponent } from '../app/detalle/detalle.component';
import { LugaresComponent } from '../app/lugares/lugares.component';
import { ContactoComponent } from '../app/contacto/contacto.component';
import { LugaresService } from '../app/services/lugares.service';
import { CrearComponent } from '../app/crear/crear.component';
import { LoginComponent } from '../app/login/login.component';
import { RegistroComponent } from '../app/registro/registro.component';

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBGbYjxUgkTnS8yigLzw8bBUcsLXUhLH-M",
    authDomain: "platzisquare-1513296720077.firebaseapp.com",
    databaseURL: "https://platzisquare-1513296720077.firebaseio.com",
    storageBucket: "platzisquare-1513296720077.appspot.com",
    messagingSenderId: "824687402456"
  }
};
