import { Component, OnInit } from '@angular/core';
import {Livre} from '../../models/Livres.model';
import {ActivatedRoute, Router} from '@angular/router';
import {LivresService} from '../../services/livres.service';
import {Actu} from '../../models/Actus.model';
import {ActusService} from '../../services/actus.service';

@Component({
  selector: 'app-actu',
  templateUrl: './actu.component.html',
  styleUrls: ['./actu.component.scss']
})
export class ActuComponent implements OnInit {
  actu: Actu;
  constructor(private route: ActivatedRoute,
              private actuService: ActusService,
              private router: Router) { }

  ngOnInit() {
    this.actu = new Actu('','',null,'',null,'', '','','');
    const id = this.route.snapshot.params['id'];
    this.actuService.getActu(+id).then(
      (actu: Actu) => {
        this.actu = actu;
      }
    );
  }
  onBack() {
    this.router.navigate(['/actus']);
  }
}



