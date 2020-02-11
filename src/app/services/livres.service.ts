import { Injectable } from '@angular/core';
import {Livre} from '../models/Livres.model';
import {Subject} from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LivresService {

  livres: Livre[] = [];
  LivresSubject = new Subject<Livre[]>();

  constructor() { }

  emitLivres() {
    this.LivresSubject.next(this.livres);
  }

  enregistrerLivres() {
    firebase.database().ref('/livres').set(this.livres);
  }

  getLivres() {
    firebase.database().ref('/livres')
      .on('value', (data) => {
      this.livres = data.val() ? data.val() : [];
      this.emitLivres();
    })
  }
  getLivre(id: number) {
    return new Promise(
      (resolve, reject) =>  {
        firebase.database().ref('livres/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  creerLivre(nouveauLivre: Livre) {
    this.livres.push(nouveauLivre);
    this.enregistrerLivres();
    this.emitLivres()
  }

  supprimerLivre(livre: Livre) {
    const indexLivre = this.livres.findIndex(
      (elLivre) => {
          if(elLivre === livre) {
            return true;
          }
      }
    );
    this.livres.splice(indexLivre, 1);
    this.enregistrerLivres();
    this.emitLivres();
  }

  ChargerFichier(file: File) {
    return new Promise((resolve, reject) => {
        const UniqueFileName = Date.now().toString();
        const upload = firebase.storage().ref()
          .child('images/' + UniqueFileName + file.name)
          .put(file);
        upload.on(firebase.storage.TaskEvent.STATE_CHANGED,
          () => {
            console.log('Chargement...');
          },
          (error) => {
            console.log('Erreur de chargement : ' + error);
            reject();
          },
          () => {
              resolve(upload.snapshot.ref.getDownloadURL());
          }

          )
    }
    )
  }
}
