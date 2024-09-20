import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Document } from './document';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  baseUrl="http://localhost:8081/document";


  constructor(private httpClient:HttpClient) { }


  adddocument(document:Document){
    
    return this.httpClient.post(`${this.baseUrl}`,document);
   }

   getAlldocument():Observable<Document[]>{
    return this.httpClient.get<Document[]>(`${this.baseUrl}`)


   }
}
