import { Component } from '@angular/core';
import { AutorizacionService } from './services/autorizacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  loggedIn: boolean = false;
  userName: string  = ''
  constructor(private autorizacionService: AutorizacionService){
    this.autorizacionService.isLogged()
      .subscribe((result)=>{
        if(result && result.uid){
          this.loggedIn = true;
          let email = result.email;
          this.userName = email.substring(0,email.lastIndexOf('@'));
        }else{
          this.loggedIn = false;
        }
      }, (error) =>{
        this.loggedIn = false;
        this.userName = '';
      });
  }
}
