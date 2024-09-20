import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributionjuryComponent } from './attributionjury/attributionjury.component';
import { AttributionnoteComponent } from './attributionnote/attributionnote.component';
import { DocumentComponent } from './document/document.component';
import { HomeComponent } from './home/home.component';
import { HomeetudiantComponent } from './homeetudiant/homeetudiant.component';
import { HomeloginComponent } from './homelogin/homelogin.component';
import { LoginCheffiliereComponent } from './login-cheffiliere/login-cheffiliere.component';
import { ModifierprofilComponent } from './modifierprofil/modifierprofil.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { StageComponent } from './stage/stage.component';
import { UpdatevalstageComponent } from './updatevalstage/updatevalstage.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ValidationstageComponent } from './validationstage/validationstage.component';
import { VisualisationdocComponent } from './visualisationdoc/visualisationdoc.component';
import { VisualisationstageComponent } from './visualisationstage/visualisationstage.component';
import { VisualiservalidComponent } from './visualiservalid/visualiservalid.component';

const routes: Routes = [{path: 'homelogin', component:HomeloginComponent},{path: '', component:HomeloginComponent},{path: 'homeetudiant/:cne', component:HomeetudiantComponent},{path: 'homeetudiant/:cne', component:HomeetudiantComponent},{path: 'home', component:HomeComponent},{path: 'stage/:cne', component:StageComponent},
{path: 'document/:cne', component:DocumentComponent},{path: 'visualisation', component:VisualisationstageComponent},
{path: 'validation', component:ValidationstageComponent},{path: 'attribution', component:AttributionnoteComponent},
{path: 'attributionjur', component:AttributionjuryComponent},{path: 'loginchef', component:LoginCheffiliereComponent},
{path: 'loginetudiant', component:UserLoginComponent},{path: 'attrinote', component:AttributionnoteComponent},{path: 'visualisationdocu', component:VisualisationdocComponent},{path: 'visualiservalis/:cne', component:VisualiservalidComponent},
{path: 'modifierpro/:cne', component:ModifierprofilComponent},{path: 'Updatevalstage/:cne', component:UpdatevalstageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
