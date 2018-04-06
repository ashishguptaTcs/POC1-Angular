import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ProductCard } from '../ProductCard';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-add-product-popup',
  templateUrl: './add-product-popup.component.html',
  styleUrls: ['./add-product-popup.component.scss']
})
export class AddProductPopupComponent implements OnInit {

  private productToAdd:ProductCard;
  closeResult:string;
  constructor(private ngbModalObject: NgbModal,
              private DataServiceService:DataServiceService) { }

  ngOnInit() {
  }

  addProduct(productId:string,productTitle:string,productDesciption:string,productImageUrl:string)
  {
    
    this.productToAdd=new ProductCard(productId,productTitle,productDesciption,productImageUrl);
    console.log("++++++++++"+JSON.stringify(this.productToAdd));
    this.productToAdd.by="Rahul";
    this.DataServiceService.addProductCard(this.productToAdd).subscribe();
  }

  openAddProductPopup(addProductPopup)
  {
    this.ngbModalObject.open(addProductPopup).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}