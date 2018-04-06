import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from "./user";
import { Observable } from "rxjs/Observable";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  private apiUrl = 'http://10.8.6.132:8080/user/authenticate/user';
  constructor(private http:HttpClient) {}

  userAuthentication(user: User):Observable<any>
  {
    //console.log("TemporaryDeleteFunction!");
    const url = `${this.apiUrl}`;
    console.log(url);
    return this.http.put<any>(url,user,httpOptions);
  }

}

