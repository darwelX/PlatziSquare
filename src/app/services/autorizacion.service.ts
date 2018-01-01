import { Injectable } from '@angular/core';

@Injectable()
export class AutorizacionService {

  constructor() { }
  public login = (username, password) => {
    console.log('Metodo de Login');
  }
  public register = (username, password, confirmPassword) => {
    console.log('Metodo de Registro');
  }
}
