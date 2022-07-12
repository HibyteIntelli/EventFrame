import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FlexLayoutModule} from "@angular/flex-layout";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CarouselEventCardComponent} from './components/carousel-event-card/carousel-event-card.component';
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {CarouselModule} from "primeng/carousel";
import {EventCardComponent} from './components/event-card/event-card.component';
import {CardListComponent} from './components/card-list/card-list.component';
import {CarouselCardListComponent} from './components/carousel-card-list/carousel-card-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthorizationInterceptor} from "./providers/authorization.interceptor";
import {PaginatorModule} from 'primeng/paginator';
import { EventLargeCardComponent } from './components/event-large-card/event-large-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselEventCardComponent,
    EventCardComponent,
    CardListComponent,
    CarouselCardListComponent,
    EventLargeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    ButtonModule,
    CardModule,
    CarouselModule,
    HttpClientModule,
    PaginatorModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthorizationInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
