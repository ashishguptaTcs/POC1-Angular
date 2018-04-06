import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../data-service.service'
import { ProductCard } from '../ProductCard';
import { AddProductPopupComponent } from '../add-product-popup/add-product-popup.component';

@Component({
  selector: 'app-my-component-one',
  templateUrl: './my-component-one.component.html',
  styleUrls: ['./my-component-one.component.scss']
})
export class MyComponentOneComponent implements OnInit {

  

  ProductCards:ProductCard[];
  constructor(private DataServiceService:DataServiceService) { }

  ngOnInit() {
    this.getProductCards();
  }
  getProductCards()
  {
    this.DataServiceService.getData().subscribe(receivedProductCards => this.ProductCards=receivedProductCards)
  }
  addProductCard(productCard:ProductCard)
  {
    this.DataServiceService.addProductCard(productCard)
    .subscribe(addedProductCard => this.ProductCards.push(addedProductCard));
  }
  editProductCard(productCard: ProductCard)
  {
    this.DataServiceService.editProductCard(productCard).subscribe();
  }
  deleteProductCard(productCard: ProductCard)
  {
    this.ProductCards=this.ProductCards.filter(pc => pc !== productCard );
    this.DataServiceService.deleteProductCard(productCard).subscribe();
  }
}
