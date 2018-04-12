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
    //console.log("TemporaryDeleteFunction!");
    const url = `${this.apiUrl}/${productCard.id}`;
    return this.http.delete<ProductCard>(url,httpOptions);
  }
  editProductCard(productCard: ProductCard)
  {
    const url = `${this.apiUrl}/${productCard.id}`;
    return this.http.put<ProductCard>(url,productCard,httpOptions);
  }
  addProductCard(productCard:ProductCard)
  {
    return this.http.post<ProductCard>(this.apiUrl,productCard,httpOptions);
  }

}
