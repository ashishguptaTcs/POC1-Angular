import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../data-service.service'
import { ProductCard } from '../ProductCard';

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
}
