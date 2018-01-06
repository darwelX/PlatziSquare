import { Component } from '@angular/core';
import { AutorizacionService } from './services/autorizacion.service';
import { Router } from '@angular/router';
import { Spinkit } from 'ng-http-loader/spinkits';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  loggedIn: boolean = false;
  userName: string  = ''
  public spinkit = Spinkit;
  
  constructor(private autorizacionService: AutorizacionService, private router: Router){
    this.autorizacionService.isLogged()
      .subscribe((result)=>{
        if(result && result.uid){
          this.loggedIn = true;
          let email = result.email;
          this.userName = (result.email)?email.substring(0,email.lastIndexOf('@')): result.displayName;
          this.router.navigate(['']);
        }else{
          this.loggedIn = false;
        }
      }, (error) =>{
        this.loggedIn = false;
        this.userName = '';
      });
  }
}
