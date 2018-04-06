import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ProductCard } from './ProductCard';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class DataServiceService {
  private apiUrl = 'http://10.8.6.132:8080/details';
  constructor(private http:HttpClient) {}
  
  
  getData(): Observable<ProductCard[]>
  {
    
    return this.http.get<ProductCard[]>(this.apiUrl);
  }

  deleteProductCard(productCard: ProductCard)
  {
    console.log("TemporaryDeleteFunction!");
    const url = `${this.apiUrl}/${productCard.id}`;
    console.log(url);
    return this.http.delete<ProductCard>(url,httpOptions);
  }

}
