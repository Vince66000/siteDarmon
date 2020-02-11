import {Component, OnDestroy, OnInit} from '@angular/core';
import {Livre} from '../models/Livres.model';
import {Subscription} from 'rxjs';
import {LivresService} from '../services/livres.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-liste-livres',
  templateUrl: './liste-livres.component.html',
  styleUrls: ['./liste-livres.component.scss']
})
export class ListeLivresComponent implements OnInit, OnDestroy {

  livres: Livre[];
  livreSubscription: Subscription;

  constructor(private livreService: LivresService, private router : Router) { }

  ngOnInit() {
    this.livreSubscription = this.livreService.LivresSubject.subscribe(
      (livres: Livre[]) => {
        this.livres = livres;
      }
    );
    this.livreService.getLivres();
    this.livreService.emitLivres();

  }
  onCreerLivre() {
    this.router.navigate(['/livres', 'nouveau'])
  }

  onSuppressionLivre(livre: Livre) {
    if (confirm("voulez vous vraiment supprimer ce livre?")) {
      this.livreService.supprimerLivre(livre);
    } else {
      this.livreService.getLivres();
    }
  }
  onVoirLivre(id:number) {
    this.router.navigate(['/livres', id]);
  }
  ngOnDestroy() {
    this.livreSubscription.unsubscribe();
  }
}
