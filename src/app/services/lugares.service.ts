import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase } from'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Headers } from '@angular/http';

@Injectable()
export class LugaresService {
  lugares: any = [];
  END_POINT = 'https://platzisquare-1513296720077.firebaseio.com';

  public getLugares(){
    return this.afDB.list('lugares/');
  }

  public getLugar(id){
    return this.afDB.object('lugares/'+id);
  }

  public guardarLugar(lugar){
    this.afDB.database.ref('lugares/'+lugar.id).set(lugar);
    let headers = new Headers({"Content-type": "application/json"});
    return this.http.post(this.END_POINT+'/lugares.json', lugar, {headers: headers});
  }

  public updateLugar(lugar){
    this.afDB.database.ref('lugares/'+lugar.id).set(lugar);
  }
  
  public obtenerGeoData(direccion){
    return this.http.get('http://maps.google.com/maps/api/geocode/json?address='+direccion);
  }

  constructor(private afDB: AngularFireDatabase, private http: Http) { 

  }

}
