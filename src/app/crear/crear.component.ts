import { LugaresService } from '../services/lugares.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  lugar: any = {};
  action: any = null;

  constructor(private lugaresServices: LugaresService, private route: ActivatedRoute) { 
    // debugger;
    this.action = this.route.snapshot.queryParams['action'];
    if(this.action == 'edit'){
      this.buscar()
    }
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
       this.lugar.lg = result.json().results[0].geometry.location.lng;
       this.lugar.lt = result.json().results[0].geometry.location.lat;
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
}
