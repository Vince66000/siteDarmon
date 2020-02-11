import { Injectable } from '@angular/core';
import {Actu} from '../models/Actus.model';
import {Subject} from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ActusService {

  actus: Actu[] = [];
  ActuSubject = new Subject<Actu[]>();

  constructor() { }

  emitActus() {
    this.ActuSubject.next(this.actus);
  }

  enregistrerActus() {
    firebase.database().ref('/actus').set(this.actus);
  }

  getActus() {
    firebase.database().ref('/actus')
      .on('value', (data) => {
        this.actus = data.val() ? data.val() : [];
        this.emitActus();
      })
  }
  getActu(id: number) {
    return new Promise(
      (resolve, reject) =>  {
        firebase.database().ref('actus/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  creerActu(nouvelleActu: Actu) {
    this.actus.push(nouvelleActu);
    this.enregistrerActus();
    this.emitActus()
  }

  supprimerActu(actu: Actu) {
    const indexActu = this.actus.findIndex(
      (elActu) => {
        if(elActu === actu) {
          return true;
        }
      }
    );
    this.actus.splice(indexActu, 1);
    this.enregistrerActus();
    this.emitActus();
  }
}
