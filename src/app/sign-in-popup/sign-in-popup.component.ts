import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from "../user.service";
import { User } from "../user";

@Component({
  selector: 'app-sign-in-popup',
  templateUrl: './sign-in-popup.component.html',
  styleUrls: ['./sign-in-popup.component.css']
})
export class SignInPopupComponent {

  closeResult: string;
  private user : User;
  constructor(private modalService: NgbModal, 
              private signinService: UserService) {}

  auth(userID :  string, password : string){
    this.user = new User(userID, password);
    //console.log("====="+userID+"======"+password);
    console.log(this.user);
    this.signinService.userAuthentication(this.user).subscribe(responseJson=>console.log("==========responseJSon==========="+JSON.stringify(responseJson)));
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
