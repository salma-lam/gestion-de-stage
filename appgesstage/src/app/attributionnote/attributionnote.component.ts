import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { Attribuernote } from '../attribuernote';
import { AttribuernoteService } from '../attribuernote.service';
import { StageServiceService } from '../stage-service.service';

@Component({
  selector: 'app-attributionnote',
  templateUrl: './attributionnote.component.html',
  styleUrls: ['./attributionnote.component.css']
})
export class AttributionnoteComponent {

  attribuernote:Attribuernote=new Attribuernote();
  constructor(private attribuernoteService:AttribuernoteService,private router:Router){}
  
  addattribuernot(){
    this.attribuernoteService.addattribuernote(this.attribuernote).subscribe(data=>{
     alert("Ajout avec success")
     this.attribuernote.cne='';
     this.attribuernote.note='';
  
    },error=>alert("Désolé, impossible d'insérer les données !!"))
 
 
   }

  
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

  home(){
    this.router.navigate(['home'])

  }

  annuler(){
    this.attribuernote.cne='';
    this.attribuernote.note='';
  }



}
