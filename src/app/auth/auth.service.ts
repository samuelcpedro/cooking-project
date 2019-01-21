import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
// import 'firebase/auth';

@Injectable()
export class AuthService {

  constructor() { }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => console.log(error));
  }

}
