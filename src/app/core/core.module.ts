import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavComponent} from './nav/nav.component';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './footer/footer.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {MessagesComponent} from './messages/messages.component';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  declarations: [
    NavComponent,
    HomeComponent,
    FooterComponent,
    PageNotFoundComponent,
    MessagesComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule
  ],
  exports: [
    AppRoutingModule,
    NavComponent,
    MessagesComponent,
    FooterComponent
  ]
})
export class CoreModule { }
