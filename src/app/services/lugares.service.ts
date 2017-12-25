import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase } from'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LugaresService {
  lugares: any = [];

  public getLugares(){
    return this.afDB.list('lugares/');
  }

  public getLugar(id){
    return this.afDB.object('lugares/'+id);
  }

  public guardarLugar(lugar){
    // console.log('guardando',lugar);
    this.afDB.database.ref('lugares/'+lugar.id).set(lugar);
  }

  public obtenerGeoData(direccion){
    return this.http.get('http://maps.google.com/maps/api/geocode/json?address='+direccion);
  }

  constructor(private afDB: AngularFireDatabase, private http: Http) { 

  }

}
