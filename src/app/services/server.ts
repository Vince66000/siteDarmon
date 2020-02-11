import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Contact} from '../models/Contact.model';
import {Router} from '@angular/router';
import {FormContactComponent} from '../contact/form-contact/form-contact.component';

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class Server {

  contact: Contact[] = [];



  constructor (private http: HttpClient) { }


  // sendPostRequest(Contact) {
  //
  //   let content = this.http.post('localhost:3000/sendMail', Contact, httpOption );
  //
  //
  // }

}
