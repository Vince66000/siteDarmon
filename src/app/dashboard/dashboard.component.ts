import { Component, OnInit } from '@angular/core';
import {Livre} from '../models/Livres.model';
import {Actu} from '../models/Actus.model';
import {ActusService} from '../services/actus.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {LivresService} from '../services/livres.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private actuService : ActusService, private livreService: LivresService, private router : Router) { }

  actus: Actu[];
  livres: Livre[];
  actuSubscription: Subscription;
  livreSubscription: Subscription;

  ngOnInit() {

    this.actuSubscription = this.actuService.ActuSubject.subscribe(
      (actus: Actu[]) => {
        this.actus = actus;
      }
    );
    this.actuService.getActus();
    this.actuService.emitActus();

    this.livreSubscription = this.livreService.LivresSubject.subscribe(
      (livres: Livre[]) => {
        this.livres = livres;
      }
    )
    this.livreService.getLivres();
    this.livreService.emitLivres()

  }
  onCreerActu() {

    this.router.navigate(['/actus', 'nouveau'])

  }
  onCreerLivre() {
    this.router.navigate(['/livres', 'nouveau'])
  }

  onCreerArticle(){
    this.router.navigate(['/articles', 'nouveau'])
  }
  onSuppressionLivre(livre: Livre) {
    if (confirm("voulez vous vraiment supprimer ce livre?")) {
      this.livreService.supprimerLivre(livre);
    } else {
      this.livreService.getLivres();
    }
  }

}
