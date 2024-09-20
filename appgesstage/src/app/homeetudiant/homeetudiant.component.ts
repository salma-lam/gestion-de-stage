import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginuserService } from '../loginuser.service';
import { Stage } from '../stage';
import { User } from '../user';

@Component({
  selector: 'app-homeetudiant',
  templateUrl: './homeetudiant.component.html',
  styleUrls: ['./homeetudiant.component.css']
})

export class HomeetudiantComponent {
  user:User=new User();
  cne!:String;
  stage:   Stage= new Stage();
  constructor(private router:Router,private loginuserService:LoginuserService,private sctiveRouter:ActivatedRoute){}
 
  ngOnInit():void{
    this.cne=this.sctiveRouter.snapshot.params['cne'];
    console.log(this.cne);
    this.loginuserService.getuserById(this.cne).subscribe(data=>{
     this.user=data
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


 

}
