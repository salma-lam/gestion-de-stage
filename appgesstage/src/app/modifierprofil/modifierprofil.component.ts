import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stage } from '../stage';
import { StageServiceService } from '../stage-service.service';
import { User } from '../user';

@Component({
  selector: 'app-modifierprofil',
  templateUrl: './modifierprofil.component.html',
  styleUrls: ['./modifierprofil.component.css']
})
export class ModifierprofilComponent {
 
  constructor( private stageservice:StageServiceService,private router:Router,private sctiveRouter:ActivatedRoute){}
  cne!:String;
  stage:   Stage= new Stage();
  user:User=new User();
 
  ngOnInit():void{
   this.cne=this.sctiveRouter.snapshot.params['cne'];
   console.log(this.cne);
   this.stageservice.getStageById(this.cne).subscribe(data=>{
    this.stage=data
    console.log(this.stage);
   })

  }

  updatevalid(cne:String){
    this.stageservice.updatevalistage(this.stage).subscribe(data=>{
      alert("validation avec success");
      this.router.navigate(['stage',cne]);
    },error=> alert("sorry unable to update"))
  
    
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

  modifier(){
  
  }




  annuler(){
    this.stage.cne='';
    this.stage.description='';
    this.stage.dureestage='';
    this.stage.emailEntre='';
    this.stage.encadrantAcad='';
    this.stage.encadrantStg='';
    this.stage.entreprise='';
    this.stage.intitule='';
  }


}
