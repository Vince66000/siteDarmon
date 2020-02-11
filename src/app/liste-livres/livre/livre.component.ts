import { Component, OnInit } from '@angular/core';
import {Livre} from '../../models/Livres.model';
import {ActivatedRoute, Router} from '@angular/router';
import {LivresService} from '../../services/livres.service';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.scss']
})
export class LivreComponent implements OnInit {

  livre: Livre;
  constructor(private route: ActivatedRoute,
              private livreService: LivresService,
              private router: Router) { }

  ngOnInit() {
    this.livre = new Livre('','',null,'',null,'');
    const id = this.route.snapshot.params['id'];
    this.livreService.getLivre(+id).then(
      (livre: Livre) => {
        this.livre = livre;
      }
    );
  }
onBack() {
    this.router.navigate(['/livres']);
}
}
