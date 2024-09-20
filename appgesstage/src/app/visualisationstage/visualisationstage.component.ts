import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Logincheffiliere } from '../logincheffiliere';
import { Stage } from '../stage';
import { StageServiceService } from '../stage-service.service';

@Component({
  selector: 'app-visualisationstage',
  templateUrl: './visualisationstage.component.html',
  styleUrls: ['./visualisationstage.component.css']
})
export class VisualisationstageComponent {
  
  logincheffiliere:Logincheffiliere=new Logincheffiliere();

  constructor(private stageServiceService:StageServiceService,private router:Router){}
  stage:   Stage[]=[];

  ngOnInit():void{
    this.stageServiceService.getAllstage().subscribe(data=>{
      this.stage=data;
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
