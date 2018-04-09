import { Component ,OnInit} from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from "../user.service";
import { User } from "../user";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in-popup',
  templateUrl: './sign-in-popup.component.html',
  styleUrls: ['./sign-in-popup.component.css']
})
export class SignInPopupComponent implements OnInit {

  closeResult: string;
  cookieValue;
  private user : User;
  signInText =  'Sign In';
  
  constructor(private modalService: NgbModal, 
              private signinService: UserService,
              private cookieService: CookieService) {}

            ngOnInit() {
              this.cookieValue= this.cookieService.get('signInCookie');
      console.log(this.cookieValue);
        this.signInText = (this.cookieValue)  ? ("Welcome" + this.cookieValue) : 'Sign In'  ;
              }


  auth(userID :  string, password : string){
   
    this.user = new User(userID, password);
  
    this.signinService.userAuthentication(this.user)
    .subscribe(responseJson=>{
      this.cookieService.set( 'signInCookie', JSON.stringify(this.user.userId) ); 
      this.cookieValue= this.cookieService.get('signInCookie');
      console.log(this.cookieValue);
        this.signInText = (this.cookieValue)  ? ("Welcome" + this.cookieValue) : 'Sign In'  ;
        location.reload();
  });
 
  }
  
  open(content) {
    (this.cookieValue) ? event.preventDefault() :
    this.modalService.open(content).result.then((result) => {
      console.log("result is===="+result);
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      console.log("reason is===="+reason);
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      console.log("reason is===="+reason);
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      console.log("reason is===="+reason);
      return 'by clicking on a backdrop';
    } else {
      console.log("reason is===="+reason);
      return  `with: ${reason}`;
    }
  }
}
