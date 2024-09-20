import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {
  private baseUrl="http://localhost:8081/user/login"
  constructor(private httpClient: HttpClient) { }


  loginUser(user:User):Observable<object>{
   console.log(user)
    return this.httpClient.post(`${this.baseUrl}`,user);

  }

  getuserById(cne:String):Observable<User> {
    console.log(cne);
    return this.httpClient.get<User>(`${this.baseUrl}/${cne}`);
  }
}
