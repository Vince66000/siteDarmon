import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LivresService} from '../../services/livres.service';
import {Router} from '@angular/router';
import {Livre} from '../../models/Livres.model';

@Component({
  selector: 'app-form-livres',
  templateUrl: './form-livres.component.html',
  styleUrls: ['./form-livres.component.scss']
})
export class FormLivresComponent implements OnInit {


  livreFOrm: FormGroup;
  fichierEnChargement = false;
  fichierUrl: string;
  fichierCharge = false;

  constructor(private formBuilder: FormBuilder,
              private livreServices: LivresService,
              private router: Router) { }

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.livreFOrm = this.formBuilder.group({
      titre: ['', Validators.required],
      auteur: ['', Validators.required],
      annee: [null, Validators.required],
      synopsis: ['', Validators.required],
      prix: [null, Validators.required],
      lien: ['', Validators.required]

    });
  }

  onEnregistrerLivre() {
    const titre = this.livreFOrm.get('titre').value;
    const auteur = this.livreFOrm.get('auteur').value;
    const annee = this.livreFOrm.get('annee').value;
    const synopsis = this.livreFOrm.get('synopsis').value;
    const prix = this.livreFOrm.get('prix').value;
    const lien = this.livreFOrm.get('lien').value;
    const nouveauLivre = new Livre(titre, auteur, annee, synopsis, prix, lien);
    if(this.fichierUrl && this.fichierUrl !== '') {
      // nouveauLivre.photo = this.fichierUrl
    }
    this.livreServices.creerLivre(nouveauLivre);
    this.router.navigate(['livres'])
  }

  onUploadFile(file: File) {
    this.fichierEnChargement = true;
    this.livreServices.ChargerFichier(file).then(
      (url: string) => {
        this.fichierUrl = url;
        this.fichierCharge = true;
      }
    )

  }
}
