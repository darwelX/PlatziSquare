import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import swal from 'sweetalert';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';


@Injectable()
export class AutorizacionService {

  constructor(private angularFireAuth: AngularFireAuth, private afDB: AngularFireDatabase, private router: Router) {
    this.isLogged();
  }

  public loggingTwitter = (callback) => {
    this.angularFireAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider())
      .then( (result) => {
        return callback(null, JSON.parse(JSON.stringify(result)));
      })
      .catch((error) => {
        return callback(new Error(`Error - ( ${error.message} )`));
      });
  }

  public loggingFacebook = (callback) => {
    this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then( (result) => {
        // console.log(result);
        return callback(null, JSON.parse(JSON.stringify(result)));
      })
      .catch((error) => {
        // console.log(error);
        return callback(new Error(`Error - ( ${error.message} )`));
      });

  }
  public login = (username, password, callback) => {
    this.angularFireAuth.auth.signInWithEmailAndPassword(username, password)
      .then((response) => {
        this.router.navigate(['lugares']);
        callback(null, JSON.parse(JSON.stringify(response)));
      })
      .catch((error) => {
        callback(new Error(`Error - ( ${error.message} )`));
      });
  }
  public register = (user, callback) => {
    const respuesta = {};
    this.angularFireAuth.auth.createUserWithEmailAndPassword(user.username, user.password)
    .then((response) => {
      const id = this.angularFireAuth.auth.currentUser.uid;
      this.afDB.database.ref('Users').child(id).set({
        activo: 1
      });
      callback(null, JSON.parse(JSON.stringify(response)));
    })
    .catch((error) => {
      callback(new Error(`Error - ( ${error.message} )`));
    });
  }

  public logout = () => {
    this.angularFireAuth.auth.signOut();
  }

  public isLogged = () => {
    return this.angularFireAuth.authState;
  }
}
