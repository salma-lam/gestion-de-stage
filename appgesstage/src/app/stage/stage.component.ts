import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginuserService } from '../loginuser.service';
import { Stage } from '../stage';
import { StageServiceService } from '../stage-service.service';
import { User } from '../user';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent {
  user:User=new User();
  cne!:String;
  stage:   Stage= new Stage();
  
  constructor(private loginuserService:LoginuserService,private stageservice:StageServiceService,private router:Router,private sctiveRouter:ActivatedRoute){}
  

  ngOnInit():void{
    this.cne=this.sctiveRouter.snapshot.params['cne'];
    console.log(this.cne);
    this.loginuserService.getuserById(this.cne).subscribe(data=>{
     this.user=data
     console.log(this.stage);
    })
 
   }

  addstage(){
    
    if(this.stage.cne=='' && this.stage.description=='' && this.stage.dureestage==''&& this.stage.emailEntre==''&&
    this.stage.encadrantAcad=='' && this.stage.encadrantStg==''&& this.stage.entreprise==''&& this.stage.intitule==''){



     alert("S'il vous plait remplir les champs ");


    }else{

    
   this.stageservice.addstage(this.stage).subscribe(data=>{
    alert("Ajout avec success")
    this.stage.cne='';
    this.stage.description='';
    this.stage.dureestage='';
    this.stage.emailEntre='';
    this.stage.encadrantAcad='';
    this.stage.encadrantStg='';
    this.stage.entreprise='';
    this.stage.intitule='';
    
  
   },error=>alert("Désolé, impossible d'insérer les données !!"))


  }
}

  modifier(cne:String){
    console.log(cne);
    this.router.navigate(["modifierpro",cne]);

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

  sta(){
    this.router.navigate(['stage'])
  }
  
  docu(cne:String){
    this.router.navigate(["document",cne])
  }
  hom(cne:String){
    this.router.navigate(['homeetudiant',cne])
  }
  modifierpro(cne:String){
    this.router.navigate(["modifierpro",cne]);

  }
  
  visualiservalis(cne:String){
    this.router.navigate(['visualiservalis',cne])
  }

}
