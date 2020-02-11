import { Component, OnInit } from '@angular/core';
import {ActusService} from '../services/actus.service';
import {Router} from '@angular/router';
import {Actu} from '../models/Actus.model';
import {Subscription} from 'rxjs';
import {Livre} from '../models/Livres.model';

@Component({
  selector: 'app-actus',
  templateUrl: './actus.component.html',
  styleUrls: ['./actus.component.scss']
})
export class ActusComponent implements OnInit {

  constructor(private actuService : ActusService, private router : Router) { }

  actus: Actu[];
  actuSubscription: Subscription;

  ngOnInit() {
    this.actuSubscription = this.actuService.ActuSubject.subscribe(
      (actus: Actu[]) => {
        this.actus = actus;
      }
    );
    this.actuService.getActus();
    this.actuService.emitActus();
  }
  onCreerActu() {

    this.router.navigate(['/actus', 'nouveau'])

  }
  onSuppressionLivre(actu: Actu) {
    this.actuService.supprimerActu(actu);
  }
  onVoirActu(id:number) {
    this.router.navigate(['/actus', id]);
  }
  ngOnDestroy() {
    this.actuSubscription.unsubscribe();
  }
}
