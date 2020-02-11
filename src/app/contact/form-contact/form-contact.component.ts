import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Contact} from '../../models/Contact.model';
import {Server} from '../../services/server';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent implements OnInit {

  contact: Contact[] = [];

  contactForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private server: Server,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.initForm()

  }
  initForm() {

    this.contactForm = this.formBuilder.group({
      mail: ['', Validators.required],
      sujet : ['', Validators.required],
      message: ['', Validators.required]

    });
  }


  onEnvoyerMail() {


    const mail = this.contactForm.get('mail').value;
    const sujet = this.contactForm.get('sujet').value;
    const message = this.contactForm.get('message').value;
    const nouveauMessage = new Contact(mail, sujet, message);
    this.http.post('http://localhost:3000/sendMail', nouveauMessage ).subscribe(
      data=> {
        let res:any = data;
        console.log(data);
      }
    );

      }




}
