import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ProductCard } from '../ProductCard';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-add-product-popup',
  templateUrl: './add-product-popup.component.html',
  styleUrls: ['./add-product-popup.component.scss']
})
export class AddProductPopupComponent implements OnInit {

  productToAdd: ProductCard;
  @Output() onAddProductCall = new EventEmitter<ProductCard>();
  closeResult: string;
  constructor(private ngbModalObject: NgbModal,
    private DataServiceService: DataServiceService) {
    this.productToAdd =
      {
        id:'',
        title:'',
        description:'',
        by:'',
        imageUrl:''
      }

  }

  ngOnInit() {
  }

  addProduct() {

    console.log("++++++++++" + JSON.stringify(this.productToAdd));
    this.productToAdd.by = "Rahul";
    this.onAddProductCall.emit(this.productToAdd);
    this.DataServiceService.addProductCard(this.productToAdd).subscribe(response=>console.log(response));
  }

  openAddProductPopup(addProductPopup) {
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
      return `with: ${reason}`;
    }
  }
}
