import { Component, OnInit } from '@angular/core';
import { AutorizacionService } from '../services/autorizacion.service';
import  swal  from 'sweetalert';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login :any = {};
  id :any = null;
  constructor(private autorizacionService:AutorizacionService, private route: ActivatedRoute, private router: Router) { 
    this.id = this.route.snapshot.params['action'];
    if(this.id == 'logout'){
      this.salir();
    }
  }

  ngOnInit() {
  }

  signin(email, password){
    this.autorizacionService.login(this.login.username, this.login.password, (err, response)=>{
      if(err){
        swal('Ha ocurrido un Error', err.message, 'error')
      }else{
        // console.log(response);
        this.router.navigate(['lugares']);
      }
    });
  }

  salir(){
    this.autorizacionService.logout();
    this.router.navigate(['login']);
  }

  loggingWithFacebook(){
    this.autorizacionService.loggingFacebook((err, response)=>{
      if(err){
        swal('Ha ocurrido un Error', err.message, 'error')
      }else{
        // console.log(response);
        this.router.navigate(['lugares']);
      }
    });
  }

  loggingWithTwitter(){
    this.autorizacionService.loggingTwitter((err, response)=>{
      if(err){
        swal('Ha ocurrido un Error', err.message, 'error')
      }else{
        // console.log(response);
        this.router.navigate(['lugares']);
      }
    });
  }
}
