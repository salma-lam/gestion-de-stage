import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import{HttpClient, HttpClientModule} from '@angular/common/http';
import { RegisterUserComponent } from './register-user/register-user.component'
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StageComponent } from './stage/stage.component';
import { DocumentComponent } from './document/document.component';
import { LoginCheffiliereComponent } from './login-cheffiliere/login-cheffiliere.component';
import { VisualisationstageComponent } from './visualisationstage/visualisationstage.component';
import { ValidationstageComponent } from './validationstage/validationstage.component';
import { AttributionnoteComponent } from './attributionnote/attributionnote.component';
import { AttributionjuryComponent } from './attributionjury/attributionjury.component';
import { HomeetudiantComponent } from './homeetudiant/homeetudiant.component';
import { HomeloginComponent } from './homelogin/homelogin.component';
import { VisualisationdocComponent } from './visualisationdoc/visualisationdoc.component';
import { ModifierprofilComponent } from './modifierprofil/modifierprofil.component';
import { VisualiservalidComponent } from './visualiservalid/visualiservalid.component';
import { UpdatevalstageComponent } from './updatevalstage/updatevalstage.component';


@NgModule({

  
  exports:[RouterModule],

  declarations: [
    AppComponent,
    UserLoginComponent,
    RegisterUserComponent,
    HomeComponent,
    StageComponent,
    DocumentComponent,
    LoginCheffiliereComponent,
    VisualisationstageComponent,
    ValidationstageComponent,
    AttributionnoteComponent,
    AttributionjuryComponent,
    HomeetudiantComponent,
    HomeloginComponent,
    VisualisationdocComponent,
    ModifierprofilComponent,
    VisualiservalidComponent,
    UpdatevalstageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
