import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentService } from '../document.service';
import { Document } from '../document';
import { Logincheffiliere } from '../logincheffiliere';

@Component({
  selector: 'app-visualisationdoc',
  templateUrl: './visualisationdoc.component.html',
  styleUrls: ['./visualisationdoc.component.css']
})
export class VisualisationdocComponent {

  logincheffiliere:Logincheffiliere=new Logincheffiliere();

  
  constructor(private documentService:DocumentService,private router:Router){}
  document:   Document[]=[];

  ngOnInit():void{
    this.documentService.getAlldocument().subscribe(data=>{
      this.document=data;
    })
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
