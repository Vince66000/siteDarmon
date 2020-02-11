import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import {RouterModule, Routes} from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ListeLivresComponent } from './liste-livres/liste-livres.component';
import { LivreComponent } from './liste-livres/livre/livre.component';
import { FormLivresComponent } from './liste-livres/form-livres/form-livres.component';
import { HeaderComponent } from './header/header.component';
import {AuthService} from './services/auth.service';
import {LivresService} from './services/livres.service';
import {AuthGuardService} from './services/auth-guard.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ActusComponent } from './actus/actus.component';
import { FormActuComponent } from './actus/form-actu/form-actu.component';
import { ActuComponent } from './actus/actu/actu.component';
import { FormContactComponent } from './contact/form-contact/form-contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormArticleComponent } from './form-article/form-article.component';


const appRoutes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'accueuil', component: AccueilComponent},
  {path: 'auth/signup', component: SignupComponent},
  {path: 'auth/signin', component: SigninComponent},
  {path: 'livres', component: ListeLivresComponent},
  {path: 'livres/nouveau', canActivate: [AuthGuardService], component: FormLivresComponent},
  {path: 'livres/:id', component: LivreComponent},
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path: '**', redirectTo: 'accueil'},
  {path: 'contact', component: FormContactComponent},
  {path: 'actus', component: ActusComponent},
  {path: 'actus/nouveau',canActivate: [AuthGuardService], component: FormActuComponent},
  {path: 'actus/:id', component: ActuComponent},
  {path: 'tableau-de-bord', component: DashboardComponent },
  {path: 'articles/nouveau', component: FormArticleComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    SignupComponent,
    SigninComponent,
    ListeLivresComponent,
    LivreComponent,
    FormLivresComponent,
    HeaderComponent,
    ActusComponent,
    FormActuComponent,
    ActuComponent,
    FormContactComponent,
    DashboardComponent,
    FormArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    LivresService,
    AuthGuardService

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

