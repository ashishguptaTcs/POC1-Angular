import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service'
import { ProductCard } from '../ProductCard';
import { AddProductPopupComponent } from '../add-product-popup/add-product-popup.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-my-component-one',
  templateUrl: './my-component-one.component.html',
  styleUrls: ['./my-component-one.component.scss']
})
export class MyComponentOneComponent implements OnInit {



  closeResult: string;
  private updatedProductCard: ProductCard;
  ProductCards: ProductCard[];
  constructor(private DataServiceService: DataServiceService,
    private ngbModalObject: NgbModal,
    private cookieService: CookieService) { }
  cookieValue;
  ngOnInit() {
    this.getProductCards();
    this.cookieValue= this.cookieService.get('signInCookie');
  }
  getProductCards() {
    this.DataServiceService.getData().subscribe(receivedProductCards => this.ProductCards = receivedProductCards)
  }
  addProductCard(productCard: ProductCard) {
    // this.DataServiceService.addProductCard(productCard)
    //   .subscribe(addedProductCard => this.ProductCards.push(addedProductCard));

    this.ProductCards.push(productCard);
  }

  editProductCard(productCard: ProductCard, updateProductPopup) {
    this.ngbModalObject
    .open(updateProductPopup)
    .result
    .then(
        (result) => {this.closeResult = `Closed with: ${result}`;}
      , (reason) => {this.closeResult = `Dismissed ${this.getDismissReason(reason)}`; }
    );

    
  }



  closeModal(editProductPopup)
  {
    editProductPopup.closeModal();

  }

  deleteProductCard(productCard: ProductCard) {
    this.ProductCards = this.ProductCards.filter(pc => pc !== productCard);
    this.DataServiceService.deleteProductCard(productCard).subscribe();
  }


  editProduct(ProductId: string, ProductTitle: string, ProductDescription: string, ProductImageUrl: string) {
    this.updatedProductCard = new ProductCard(ProductId, ProductTitle, ProductDescription, ProductImageUrl);
    this.updatedProductCard.by="Rahul";
    console.log("=============== Update=========="+JSON.stringify(this.updatedProductCard));
    this.DataServiceService.editProductCard(this.updatedProductCard).subscribe();
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
