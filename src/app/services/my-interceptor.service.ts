import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
import { ToasterService } from 'angular2-toaster';
import 'rxjs/add/operator/do';
import { error } from 'protractor';

@Injectable()
export class MyInterceptorService {

  constructor(private toasterService: ToasterService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    return next.handle(req).do(event =>{
      if(event instanceof HttpResponse){
        console.log(event);
        this.toasterService.pop('success', event.statusText, 'La llamada salio bien!');
      }
    }, (error) =>{
      console.log(error, error.statusText);
      this.toasterService.pop('error', error.statusText, error.messge);
    })
  }

}




