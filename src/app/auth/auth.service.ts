import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
// import 'firebase/auth';

@Injectable()
export class AuthService {

  token: string;

  constructor() { }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => console.log(error));
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((response) =>
        firebase.auth().currentUser.getIdToken()
          .then((token: string) => this.token = token))
      .catch((error: any) => console.log(error));
  }

  getIdToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
