import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase } from'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class LugaresService {
  lugares: any = [];
  END_POINT = 'https://platzisquare-1513296720077.firebaseio.com';
  ls:any;

  public getLugares(){
    // return this.afDB.list('lugares/');
    return this.http.get(this.END_POINT+'/lugares.json?auth='+this.ls.stsTokenManager.accessToken);
  }

  public getAll(){
    // return this.afDB.list('lugares/');
    return this.http.get(this.END_POINT+'/.json?auth='+this.ls.stsTokenManager.accessToken)
      .map( (response) => {
        let data = response.json().lugares;
        return data;
      })
  }
  
  public getLugar(id){
    return this.afDB.object('lugares/'+id);
  }

  public guardarLugar(lugar){
    //let ref = this.afDB.database.ref().child('lugares').push();
    //lugar.id = ref.key;
    this.afDB.database.ref('lugares/'+lugar.id).set(lugar);
    // let headers = new Headers({"Content-type": "application/json"});
    // console.log(lugar);
    // let data = lugar.id;
    // return this.http.post(this.END_POINT+`/lugares/${lugar.id}.json?auth=${this.ls.stsTokenManager.accessToken}&key=false`, lugar, {headers: headers});
  }

  public updateLugar(lugar){
    this.afDB.database.ref('lugares/'+lugar.id).set(lugar);
  }
  
  public obtenerGeoData(direccion){
    return this.http.get('http://maps.google.com/maps/api/geocode/json?address='+direccion);
  }

  constructor(private afDB: AngularFireDatabase, private http: Http) { 
    this.ls = localStorage.getItem('firebase:authUser:'+environment.firebase.apiKey+":PlaziSquare");
    this.ls = JSON.parse(this.ls);
  }

}
