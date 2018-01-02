import { Component, OnInit } from '@angular/core';
import { AutorizacionService } from '../services/autorizacion.service';
import swal from 'sweetalert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registro: any = {};

  constructor(private autorizacionService: AutorizacionService, private router: Router) { }

  ngOnInit() {
  }

  signup(){
    if(this.registro.password == this.registro.confirmPassword){
      this.autorizacionService.register(this.registro, (err, response)=>{
        console.log('reponse', response);
        if(err){
          swal('A ocurrido un Error', err.message,'error');
        }else{
          if(response.uid){
            this.registro={};
            this.router.navigate(['lugares']);
          }
        }
      });
    }else{
      swal('A ocurrido un Error ', 'No coinciden los passwords ', 'error');
    }
  }
}
