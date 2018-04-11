
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { UserCreate } from '../userCreate';
import { UserService } from '../user.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
//import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})


export class CreateAccountComponent implements OnInit {
  
  closeResult: string;
  createuser : UserCreate;
  cookieValue;
 constructor(private modalService: NgbModal,
              private   UserService : UserService,
              private CookieService : CookieService,
              private router: Router) {}
 
              ngOnInit() {
                console.log("Inside onit");
                this.createuser = {
                  applicationId: 'Bond007',
                  email: '',
                  name: '',
                  password: '',
                  userName: ''
                }
              }


 public create() {
   console.log(this.createuser);
    //console.log("name====="+name+"password======"+password +'email=======' +email +'username========'+userName );
    this.createuser = new UserCreate(this.createuser.email, this.createuser.name,this.createuser.password ,this.createuser.userName);
    this.UserService.createUser( this.createuser).subscribe(response =>{
      console.log("in subscribe");
     this.CookieService.set( 'signInCookie', this.createuser.userName );
     this.cookieValue= this.CookieService.get('signInCookie');
     this.router.navigateByUrl('/');
    });
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
