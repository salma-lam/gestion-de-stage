import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginuserService } from '../loginuser.service';
import { Stage } from '../stage';
import { User } from '../user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  stage:   Stage= new Stage();
  user:User=new User();
  constructor(private loginuserService:LoginuserService,private router: Router){}



    userLogin(cne:String){
    

    console.log(this.user)
    this.loginuserService.loginUser(this.user).subscribe(data=>{
    alert("Login avec success") 
 
    this.router.navigate(['homeetudiant']);
    
    console.log(cne);
    this.router.navigate(["homeetudiant",cne]); 
  
    },error=>alert("Désolé, CNE ou Mot de passe incorrecte !!"));

   
   }


  
};


