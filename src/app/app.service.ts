
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import Category from './category';


//import { ArrayOfMenuItem } from './arrayOfMenuItems';







@Injectable()
export class AppService{
  menuItems = [];
  categories: Category[];
  
  constructor(private http: HttpClient) {

    
    
    // http.get("http://10.8.6.132:8080/menuDetails")
    //   // Call map on the response observable to get the parsed people object
    //   .map(res => res.json())
    //   // Subscribe to the observable to get the parsed people object and attach it to the
    //   // component
    //   .subscribe(menuItems => {
    //     this.menuItems = menuItems;
    //   });
    

  }

  getMenuItems(): Observable<Category[]> {

    
     //var result = this.http.get<Category[]>("http://10.8.6.132:8080/menuDetails");

    var result= this.http.get<Category[]>("./assets/headerSubMenu.json");
     return result ;

      
  }
}