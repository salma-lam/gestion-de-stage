import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stage } from './stage';
import { Validstage } from './validstage';

@Injectable({
  providedIn: 'root'
})
export class StageServiceService {
 
 baseUrl="http://localhost:8081/stage";




  constructor(private httpClient:HttpClient) { }


  addstage(stage:Stage){
    
    return this.httpClient.post(`${this.baseUrl}`,stage);
   }
  
   getAllstage():Observable<Validstage[]>{
    return this.httpClient.get<Validstage[]>(`${this.baseUrl}`)
   }




   getStageById(cne:String):Observable<Stage> {
    console.log(cne);
    return this.httpClient.get<Stage>(`${this.baseUrl}/${cne}`);
  }

  updatevalistage(stage:Stage):Observable<Stage>{
    return this.httpClient.post<Stage>(`${this.baseUrl}`,stage);
  }
 

}
