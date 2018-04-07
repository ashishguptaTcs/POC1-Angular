import { Component ,OnInit  } from '@angular/core';
import {AppService} from '../app.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { stringify } from '@angular/core/src/util';

import { isInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import Category from '../category';
import MenuItem from '../menuItem';
import findStore from '../findstore';
import {Stores} from '../stores';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-header-sub-menu',
  templateUrl: './header-sub-menu.component.html',
  styleUrls: ['./header-sub-menu.component.css']
})
export class HeaderSubMenuComponent implements OnInit {
  closeResult: string;
  // arraycategories =[];
  // categories=[];
  // values= [];
  // items: any;

  categories:Category[];
  findstore : findStore;  
  stores : Stores;
  searchedData:Stores[];
  Cookievalue;
  value;
  constructor(private _data : AppService,
              private modalService: NgbModal,
              private cookieService: CookieService 
            ) {

  }

  ngOnInit() {
    this._getData();
   this.Cookievalue = this.cookieService.get('signInCookie');
   this.value = this.Cookievalue;
  }

  
  _getData(){
   
    this._data.getMenuItems()
   .subscribe((receivedCategories:Category[]) => { this.categories = receivedCategories; console.log(receivedCategories)} );
    
   
   }

   search(zipcode :  string){
    console.log("Zipcode is=====" +zipcode);
   // this.store = new findStore(zipcode,);
    //console.log("this.store=====" +JSON.stringify(this.store.zipCode));
    this._data.searchForData(zipcode).subscribe((resultOfSearch) => {(this.searchedData) = (resultOfSearch.stores) ; console.log( this.searchedData)} );

   }


  open(content) {
    this.modalService.open(content).result.then((result) => {
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

//  this.arraycategories.push(MenuItems[0]);
    //  const arrayCategories = this.arraycategories[0];
 
    //  console.log('typeof arrayCategories ' + typeof arrayCategories);
 
    //  delete arrayCategories._id;
     
    //  this.categories = Object.keys(arrayCategories);
    //  console.log('arrayCategories ' + JSON.stringify(arrayCategories));
     
    //  this.categories.forEach(wrapperCategory => {
    //    console.log('wrapperCategory ' + wrapperCategory);
    //    console.log('arrayCategories[wrapperCategory] ' +JSON.stringify(arrayCategories[wrapperCategory]));
    //    console.log('typeof arrayCategories[wrapperCategory] ' + typeof arrayCategories[wrapperCategory]);
    //    arrayCategories[wrapperCategory].forEach(category => {
    //      console.log('Name: ' + category.value);
    //    });
    //  });
 
     
    //  console.log('type of this.arraycategories[0] = ' + typeof this.arraycategories[0])
   //});
  
  //console.log(this.arraycategories);

  //
  //return JSON.stringify (this._data.menuItems.map(menuItems => menuItems));
