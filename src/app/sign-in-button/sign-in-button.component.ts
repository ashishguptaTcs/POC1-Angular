import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../user.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in-button',
  templateUrl: './sign-in-button.component.html',
  styleUrls: ['./sign-in-button.component.scss']
})
export class SignInButtonComponent implements OnInit {

  closeResult: string;
  cookieValue;
  private user : User;
  signInText =  'Sign In';
  applicationId;
  errorMessage;
  constructor(private modalService: NgbModal, 
              private signinService: UserService,
              private cookieService: CookieService) {}

            ngOnInit() {
              this.cookieValue= this.cookieService.get('signInCookie');
        this.signInText = (this.cookieValue)  ? ("Welcome  " + this.cookieValue) : 'Sign In'  ;
              }


  auth(userID :  string, password : string ){
    this.applicationId ='Bond007';
    this.user = new User(this.applicationId,userID, password);
    this.signinService.userAuthentication(this.user)
    .subscribe(responseJson=>{ this.afterAuthentication(responseJson.message);
      // this.cookieService.set( 'signInCookie', this.user.userId ); 
      // this.cookieValue= this.cookieService.get('signInCookie');
      // console.log(this.cookieValue);
      //   this.signInText = (this.cookieValue)  ? ("Welcome   "   +   this.cookieValue) : 'Sign In'  ;
      //   location.reload(); 
  });
 
  }
  

  afterAuthentication(response: any): string {
    if (response === 'User Authenticate' ) {
     this.cookieService.set( 'signInCookie', this.user.userId ); 
      this.cookieValue= this.cookieService.get('signInCookie');
        this.signInText = (this.cookieValue)  ? ("Welcome   "   +   this.cookieValue) : 'Sign In'  ;
        location.reload(); 
    } else if (response === 'Unable To Find User') {
      return this.errorMessage = '*' +response;
    } else  {
      return  this.errorMessage = '*' +response;
    }
  }
  open(content) {
    (this.cookieValue) ? event.preventDefault() :
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
