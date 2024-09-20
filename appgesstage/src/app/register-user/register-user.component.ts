import { Component } from '@angular/core';
import { RegisterService } from '../register.service';
import { User } from '../user';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})


export class RegisterUserComponent {
  user:User=new User();
 

  constructor(private registerService: RegisterService) { }
  userRegister(){
    console.log(this.user);
    this.registerService.registerUser(this.user).subscribe(data=>{
     alert("Utilisateur crée avec succès ")
     this.user.cne='';
     this.user.nom='';
     this.user.prenom='';
     this.user.email='';
     this.user.password='';
     this.user.cpassword='';
    },error=>alert("Désolé, Compte non crée"));
  }
}
