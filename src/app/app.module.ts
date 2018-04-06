import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MyComponentOneComponent } from './my-component-one/my-component-one.component';
import { DataServiceService } from './data-service.service';
import {HeaderSubMenuComponent} from './header-sub-menu/header-sub-menu.component';
import {SignInPopupComponent} from './sign-in-popup/sign-in-popup.component';
import {AppService} from './app.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { PageCarouselComponent } from './page-carousel/page-carousel.component';
import { HttpClient} from '@angular/common/http';
import { UICarouselModule } from "ui-carousel";
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {CreateAccountComponent} from './create-account/create-account.component';
import { RouterModule } from '@angular/router';
import { UserService } from "./user.service";



@NgModule({
  declarations: [
    AppComponent,
    MyComponentOneComponent,
    HeaderSubMenuComponent,
    SignInPopupComponent,
    PageCarouselComponent,
    HeaderComponent,
    FooterComponent,
    CreateAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
    FormsModule,
    UICarouselModule,
    RouterModule.forRoot([
      { path:'', component: SignInPopupComponent },
 
      { path:'createAccount', component:  CreateAccountComponent},
 ])
  ],
  providers: [DataServiceService , AppService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}