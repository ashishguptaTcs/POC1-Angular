import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ProductCard } from './ProductCard';

@Injectable()
export class DataServiceService {
  private apiUrl = 'http://10.8.6.132:8080/details';
  constructor(private http:HttpClient) {}
  
  
  getData(): Observable<ProductCard[]>
  {
    
    return this.http.get<ProductCard[]>(this.apiUrl);
  }

}
