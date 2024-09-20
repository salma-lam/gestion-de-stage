import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Attribuernote } from './attribuernote';

@Injectable({
  providedIn: 'root'
})
export class AttribuernoteService {
  baseUrl="http://localhost:8081/addattribuernote";
  constructor(private httpClient:HttpClient) { }


  addattribuernote(attribuernote:Attribuernote){
    
    return this.httpClient.post(`${this.baseUrl}`,attribuernote);
   }
}
