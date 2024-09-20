import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Logincheffiliere } from '../logincheffiliere';
import { LogincheffiliereService } from '../logincheffiliere.service';
import { ValidestageService } from '../validestage.service';
import { Validstage } from '../validstage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  logincheffiliere:Logincheffiliere=new Logincheffiliere();
  email!:String;
  constructor(private router:Router ,private logincheffiliereService:LogincheffiliereService,private sctiveRouter:ActivatedRoute){}

  

 
  vissualistage(){
    this.router.navigate(['visualisation'])
  }
  
  validestage(){
    this.router.navigate(['validation'])
  }
  attnote(){
    this.router.navigate(['attrinote'])
  }
  attnjury(){
    this.router.navigate(['attributionjur'])
  }

  vissualidocu(){
    this.router.navigate(['visualisationdocu'])
  }
  

}
