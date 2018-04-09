
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import Category from './category';
import findStore from './findstore';
import { Stores } from './stores';

@Injectable()
export class AppService{
  menuItems = [];
  categories: Category[];
  private apiUrl = 'http://10.8.6.132:8080/storeDetails';
  //private apiUrl = 'http://10.8.6.132:8080/storeDetails';
  constructor(private http: HttpClient) {}

  getMenuItems(): Observable<Category[]> {

    
     //var result = this.http.get<Category[]>("http://10.8.6.132:8080/menuDetails");

    var result= this.http.get<Category[]>("./assets/headerSubMenu.json");
     return result ;

      
  }

  searchForData(zipCode: string): Observable<any>{
    const url = `${this.apiUrl}/${zipCode}`;
    var result= this.http.get(url);
    console.log(result);
    return result;
  }
}