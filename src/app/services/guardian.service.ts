import { Injectable } from '@angular/core';
import { AutorizacionService } from './autorizacion.service';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

@Injectable()
export class GuardianService implements CanActivate{

  loggedIn: boolean = false;

  constructor(private autorizacionService: AutorizacionService, private router: Router){
    this.autorizacionService.isLogged()
      .subscribe((result)=>{
        if(result && result.uid){
          this.loggedIn = true;
          let email = result.email;
        }else{
          this.loggedIn = false;
          this.router.navigate(['login']);
        }
      }, (error) =>{
        this.loggedIn = false;
        this.router.navigate(['login']);
      });
  }

  canActivate(){
    return this.loggedIn;
  }
}
