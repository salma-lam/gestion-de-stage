import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Logincheffiliere } from '../logincheffiliere';
import { Stage } from '../stage';

import { StageServiceService } from '../stage-service.service';
import { ValidestageService } from '../validestage.service';
import { Validstage } from '../validstage';

@Component({
  selector: 'app-validationstage',
  templateUrl: './validationstage.component.html',
  styleUrls: ['./validationstage.component.css']
})
export class ValidationstageComponent implements OnInit{
  stage:   Stage= new Stage();
  validstage:   Validstage= new Validstage();
  logincheffiliere:Logincheffiliere=new Logincheffiliere();
  constructor( private validestageService:ValidestageService, private stageservice:StageServiceService,private router:Router){}
  stagee:   Stage[]=[];

  ngOnInit():void{
    this.stageservice.getAllstage().subscribe(data=>{
      this.stagee=data;
    })
  }
  


  addvalidestagee(cne:String){
  

    console.log(cne);
    this.router.navigate(["Updatevalstage",cne]);



 /*this.validestageService.addvalidestage(this.stage).subscribe(data=>{
    alert("Stage Data   Insert Succefully")
 
   },error=>alert("Sorry unable to insert Stage data"))

*/
  }

  
  deletestage(){
    this.stagee.pop();
   
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





}
