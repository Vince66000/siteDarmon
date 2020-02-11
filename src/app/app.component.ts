import { Component } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'siteDarmon';
  constructor() {

    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyAV9XRc7u47N6faEr82AWhnshhHK9hEvc8",
      authDomain: "sitedarmon.firebaseapp.com",
      databaseURL: "https://sitedarmon.firebaseio.com",
      projectId: "sitedarmon",
      storageBucket: "sitedarmon.appspot.com",
      messagingSenderId: "448794432333",
      appId: "1:448794432333:web:1e411a89cc998545af1d04"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  }

}
