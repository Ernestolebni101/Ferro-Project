import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly oAuth:AngularFireAuth) { }

  async Login(email:string, password:string, opt:string = 'D')
  {
    try {
      let result = null;
       switch (opt) {
         case 'G':
           result =  await this.oAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
           break;
         case 'D':
           result =  await this.oAuth.signInWithEmailAndPassword(email,password);
           break;
         default:
           break;
       }
       return result;
     }
     catch(error){
        console.error(error);
     } 
  }

  GetLogedUser = ():Observable<firebase.User | null> => this.oAuth.authState;
  Logout = () =>{
    this.oAuth.signOut();
  }

}
