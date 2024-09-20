import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stage } from '../stage';
import { StageServiceService } from '../stage-service.service';

@Component({
  selector: 'app-updatevalstage',
  templateUrl: './updatevalstage.component.html',
  styleUrls: ['./updatevalstage.component.css']
})
export class UpdatevalstageComponent {

  constructor( private stageservice:StageServiceService,private router:Router,private sctiveRouter:ActivatedRoute){}
  cne!:String;
  stage:   Stage= new Stage();
 
  ngOnInit():void{
   this.cne=this.sctiveRouter.snapshot.params['cne'];
   console.log(this.cne);
   this.stageservice.getStageById(this.cne).subscribe(data=>{
    this.stage=data
    console.log(this.stage);
   })

}

  updatevalid(){
    this.stageservice.updatevalistage(this.stage).subscribe(data=>{
      alert("validation avec success");
      this.router.navigate(['validation']);
    },error=> alert("Désolé, impossible d'insérer les données !!"))
  
     
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
