import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import * as data from './../assets/key.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  ngOnInit(): void {

    const apiK: string = data['apiKey'];
    const authD: string = data['authDomain'];

    firebase.initializeApp({
      apiKey: apiK,
      authDomain: authD,
    });
  }
}
