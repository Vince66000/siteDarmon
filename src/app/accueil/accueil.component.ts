import { Component, OnInit } from '@angular/core';
declare var require: any;

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  cheminImage = require('src/assets/portrait2.jpg');

  constructor() {
  }
  ngOnInit() {
  }

}
