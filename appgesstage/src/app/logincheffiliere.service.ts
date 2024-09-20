import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Logincheffiliere } from './logincheffiliere';

@Injectable({
  providedIn: 'root'
})
export class LogincheffiliereService {
  private baseUrl="http://localhost:8081/logincheffiliere"
  constructor(private httpClient:HttpClient) { }



  addcheffiliere(logincheffiliere:Logincheffiliere):Observable<object>{
    console.log(logincheffiliere)
     return this.httpClient.post(`${this.baseUrl}`,logincheffiliere);
 
   }

   getchefById(email:String):Observable<Logincheffiliere> {
    console.log(email);
    return this.httpClient.get<Logincheffiliere>(`${this.baseUrl}/${email}`);
  }
}
