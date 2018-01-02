import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import swal from 'sweetalert';
import { Router } from '@angular/router';
@Injectable()
export class AutorizacionService {

  constructor(private angularFireAuth: AngularFireAuth, private afDB: AngularFireDatabase, private router: Router) { 
  }

  public login = (username, password) => {
    this.angularFireAuth.auth.signInWithEmailAndPassword(username, password)
      .then((response)=>{
        this.router.navigate(['lugares']);
      })
      .catch((error)=>{
        swal('Ha ocurrido un Error', error.message, 'error')
      })
  }
  public register = (user, callback) => {
    let respuesta = {}
    this.angularFireAuth.auth.createUserWithEmailAndPassword(user.username, user.password)
    .then((response)=>{
      let id = this.angularFireAuth.auth.currentUser.uid;
      this.afDB.database.ref('Users').child(id).set({
        activo: 1
      })
      callback(null, JSON.parse(JSON.stringify(response)));
    })
    .catch((error)=>{
      callback(new Error(`Error - ( ${error.message} )`))
    });
  }

  public logout = ()=>{
    this.angularFireAuth.auth.signOut();
  }

  public isLogged = () => {
    return this.angularFireAuth.authState;
  }
}
