import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from "./user";
import { Observable } from "rxjs/Observable";
import { UserCreate } from './userCreate';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  private apiUrl = 'http://10.8.6.132:8080/user/authenticate/user';
  private createServiceUrl ="http://10.8.6.132:8080/user/create";
  constructor(private http:HttpClient) {}

  userAuthentication(user: User):Observable<any>
  {
    //console.log("TemporaryDeleteFunction!");
    const url = `${this.apiUrl}`;
    return this.http.put<any>(url,user,httpOptions);
  }
  createUser(userCreate: UserCreate) :Observable<any>
  {
    const result = this.http.post<UserCreate>(this.createServiceUrl,userCreate,httpOptions);
    return result
  }

}

