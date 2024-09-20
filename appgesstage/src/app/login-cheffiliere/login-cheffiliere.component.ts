
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Logincheffiliere } from '../logincheffiliere';
import { LogincheffiliereService } from '../logincheffiliere.service';

@Component({
  selector: 'app-login-cheffiliere',
  templateUrl: './login-cheffiliere.component.html',
  styleUrls: ['./login-cheffiliere.component.css']
})
export class LoginCheffiliereComponent {
  logincheffiliere:Logincheffiliere=new Logincheffiliere();

  constructor(private logincheffiliereService:LogincheffiliereService,private router:Router){}


    addcheffiliere(){
    console.log(this.logincheffiliere)
    this.logincheffiliereService.addcheffiliere(this.logincheffiliere).subscribe(data=>{
     alert("Login avec success") 
     this.router.navigate(["home"]);
    },error=>alert(" Désolé, Email ou Mot de passe incorrecte !!"));

   }   





}