import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Actu} from '../../models/Actus.model';
import {ActusService} from '../../services/actus.service';

@Component({
  selector: 'app-form-actu',
  templateUrl: './form-actu.component.html',
  styleUrls: ['./form-actu.component.scss']
})
export class FormActuComponent implements OnInit {

  actuForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private actuService: ActusService,
              private router: Router) { }

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.actuForm = this.formBuilder.group({
      titre: ['', Validators.required],
      resume: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      heureDebut: ['', Validators.required],
      heureFin: ['', Validators.required],
      adresse: ['', Validators.required],
      codePostal: ['', Validators.required],
      ville: ['', Validators.required]


    });
  }

  onEnregistrerActu() {
    const titre = this.actuForm.get('titre').value;
    const resume = this.actuForm.get('resume').value;
    const dateDebut = this.actuForm.get('dateDebut').value;
    const dateFin = this.actuForm.get('dateFin').value;
    const heureDebut = this.actuForm.get('heureDebut').value;
    const heureFin = this.actuForm.get('heureFin').value;
    const adresse = this.actuForm.get('adresse').value;
    const codePostal = this.actuForm.get('codePostal').value;
    const ville = this.actuForm.get('ville').value;
    const nouvelleActu = new Actu(titre, resume, dateDebut, dateFin, heureDebut, heureFin, adresse, codePostal, ville);
    this.actuService.creerActu(nouvelleActu);
    this.router.navigate(['actus'])
  }


}
