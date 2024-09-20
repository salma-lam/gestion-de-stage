import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stage } from '../stage';
import { StageServiceService } from '../stage-service.service';
import { User } from '../user';

@Component({
  selector: 'app-visualiservalid',
  templateUrl: './visualiservalid.component.html',
  styleUrls: ['./visualiservalid.component.css']
})
export class VisualiservalidComponent {

  stage:   Stage= new Stage();
  user:User=new User();
  cne!:String;
  constructor(  private stageservice:StageServiceService,private router:Router,private sctiveRouter:ActivatedRoute){}
  stagee:   Stage[]=[];

  
  ngOnInit():void{
    this.stageservice.getAllstage().subscribe(data=>{
      this.stagee=data;
    })
    this.cne=this.sctiveRouter.snapshot.params['cne'];
    console.log(this.cne);
    this.stageservice.getStageById(this.cne).subscribe(data=>{
     this.stage=data
     console.log(this.stage);
    })
 
   }
  











  sta(cne:String){
    this.router.navigate(["stage",cne]); 
  }
  
  docu(cne:String){
    this.router.navigate(["document",cne])
  }
  modifierpro(cne:String){
    this.router.navigate(["modifierpro",cne])
  }
  
  visualiservalis(cne:String){
    this.router.navigate(['visualiservalis',cne])
  }
  hom(cne:String){
    this.router.navigate(['homeetudiant',cne])
  }
}
