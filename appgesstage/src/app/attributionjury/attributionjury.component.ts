import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Attribuerjury } from '../attribuerjury';
import { AttribuerjuryService } from '../attribuerjury.service';

@Component({
  selector: 'app-attributionjury',
  templateUrl: './attributionjury.component.html',
  styleUrls: ['./attributionjury.component.css']
})
export class AttributionjuryComponent {
  attribuerjury:Attribuerjury=new Attribuerjury();
  constructor(private attribuerjuryService:AttribuerjuryService,private router:Router){}


    addattribuerjury(){
      this.attribuerjuryService.addattribuerjury(this.attribuerjury).subscribe(data=>{
       alert("Ajout avec success")
       this.attribuerjury.cne='';
       this.attribuerjury.jury='';
    
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
      this.attribuerjury.cne='';
      this.attribuerjury.jury='';
    }

}
