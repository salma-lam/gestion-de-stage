import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Document } from '../document';
import { DocumentService } from '../document.service';
import { LoginuserService } from '../loginuser.service';
import { Stage } from '../stage';
import { User } from '../user';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent {
 document : Document =new Document();
 user:User=new User();
 cne!:String;
 stage:   Stage= new Stage();



 constructor(private loginuserService:LoginuserService,private documentService:DocumentService,private router:Router,private sctiveRouter:ActivatedRoute){}
 
 
 ngOnInit():void{
  this.cne=this.sctiveRouter.snapshot.params['cne'];
  console.log(this.cne);
  this.loginuserService.getuserById(this.cne).subscribe(data=>{
   this.user=data
   console.log(this.stage);
  })

 }


  adddocument(){
  this.documentService.adddocument(this.document).subscribe(data=>{
   alert("Ajout avec success ")
   this.document.cne='';
   this.document.drive='';
  
  
   
  },error=>alert("Désolé, impossible d'insérer les données !!"))


 }

 

 annuler(){
  this.document.cne='';
  this.document.drive='';
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
