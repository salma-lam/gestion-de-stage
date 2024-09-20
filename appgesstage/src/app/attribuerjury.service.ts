import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Attribuerjury } from './attribuerjury';

@Injectable({
  providedIn: 'root'
})
export class AttribuerjuryService {
  baseUrl="http://localhost:8081/addattribuerjury";
  constructor(private httpClient:HttpClient) { }


  addattribuerjury(attribuerjury:Attribuerjury){
    
    return this.httpClient.post(`${this.baseUrl}`,attribuerjury);
   }
}
