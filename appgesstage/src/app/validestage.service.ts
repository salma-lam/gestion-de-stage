import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stage } from './stage';

@Injectable({
  providedIn: 'root'
})
export class ValidestageService {
  baseUrl="http://localhost:8081/stagevalide";

   constructor(private httpClient:HttpClient) { }
 
   addvalidestage(stage:Stage){
     return this.httpClient.post(`${this.baseUrl}`,stage);
    }
 
 
}
