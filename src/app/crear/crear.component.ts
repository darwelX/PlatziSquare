import { LugaresService } from '../services/lugares.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { ApiResponse } from '../interfaces/api-response';
import { Http } from '@angular/http';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  lugar: any = {};
  action: any = null;
  result$: Observable<any>;
  private searchField: FormControl;
  constructor(private lugaresServices: LugaresService, private route: ActivatedRoute, private http: HttpClient) { 
    // debugger;
    this.action = this.route.snapshot.queryParams['action'];
    if(this.action == 'edit'){
      this.buscar()
    }
    const URL = 'http://maps.google.com/maps/api/geocode/json';
    this.searchField = new FormControl();
    this.result$ = this.searchField.valueChanges
      .debounceTime(500)
      .switchMap( (query) => {
        if(query.length > 0){
          return this.http.get(`${URL}?address=${query}`)
        }else{
          return [];
        }
      })
      // .map(response => response.json())
      .map((response: ApiResponse) => response.results);
  }

  ngOnInit() {
  }

  buscar(){
    let id = this.route.snapshot.params['id'];
    this.lugaresServices.getLugar(id)
      .valueChanges().subscribe(lugar => {
          this.lugar = lugar;
        })
  }

  guardar(){
    let direccion = this.lugar.calle+','+this.lugar.ciudad+','+this.lugar.pais;
    this.lugaresServices.obtenerGeoData(direccion)
    .subscribe( (result)=>{
       if (this.action != 'edit'){
         this.lugar.id = Date.now();
         this.lugar.activo = true;
        //  this.lugaresServices.guardarLugar(this.lugar)
        //   .subscribe(result => {
        //     if(result.status == 200){
        //       swal('Registro guardado', 'Operacion Exitosa', 'success');
        //       this.lugar = {};
        //     }else{
        //       swal('A ocurrido un Error', 'Codigo '+result.status, 'error');
        //     }
        //   });
        this.lugaresServices.guardarLugar(this.lugar);
        swal('Registro guardado', 'Operacion Exitosa', 'success');
        this.lugar = {};
       }else{
         this.lugaresServices.updateLugar(this.lugar);
         swal('Registro Actulizado', 'Operacion Exitosa', 'success');
       }
             
    }, error => {
      swal('A ocurrido un Error '+ error.statusText, 'Codigo '+error.status, 'error');
    });
    // console.log(this.lugar);
  }

  obtenerDireccion(result) {
    console.log(result);
    const addressComponents = result.address_components;
    const adrressParams: any = {};
    for (let i = 0, len = addressComponents.length; i < len; i++) {
      const type = addressComponents[i].types[0].toString();
      switch (type) {
        case'street_number':
          adrressParams.street_number = addressComponents[i].long_name;
          break;
        case'route':
          adrressParams.route = addressComponents[i].long_name;
          break;
        case'locality':
          adrressParams.locality = addressComponents[i].long_name;
          break;
        case'country':
          adrressParams.country = addressComponents[i].long_name;
          break;
      }
    }
    
    this.lugar.calle = (!adrressParams.route && !adrressParams.street_number)? adrressParams.locality : `${(adrressParams.route)? adrressParams.route: ''} ${(adrressParams.street_number)?adrressParams.street_number:''}`;
    this.lugar.ciudad = adrressParams.locality;
    this.lugar.pais = adrressParams.country;
    this.lugar.lg = result.geometry.location.lng;
    this.lugar.lt = result.geometry.location.lat;
  }
}
