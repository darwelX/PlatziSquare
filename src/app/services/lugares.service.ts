import { Injectable } from '@angular/core';
import { AngularFireDatabase } from'angularfire2/database';
@Injectable()
export class LugaresService {
  lugares: any = [];
  public getLugares(){
    return this.afDB.list('lugares/');
  }

  public buscarLugar(id){
    return this.lugares.filter((lugar)=>{return lugar.id == id})[0] || null;
  }

  public guardarLugar(lugar){
    // console.log('guardando',lugar);
    this.afDB.database.ref('lugares/'+lugar.id).set(lugar);
  }
  constructor(private afDB: AngularFireDatabase) { 
    this.getLugares()
    .valueChanges().subscribe(lugares => {
      // console.log('aqui',lugares);
      this.lugares = lugares;
    });
  }

}
