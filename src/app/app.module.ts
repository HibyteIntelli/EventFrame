import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FlexLayoutModule} from "@angular/flex-layout";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EventCardComponent} from './components/event-card/event-card.component';
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {CarouselModule} from "primeng/carousel";
import {EventDetailedCardComponent} from './components/event-detailed-card/event-detailed-card.component';
import {DetailedCardListComponent} from './components/detailed-card-list/detailed-card-list.component';
import {CardsExampleComponent} from './components/cards-example/cards-example.component';
import {CarouselCardListComponent} from './components/carousel-card-list/carousel-card-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthorizationInterceptor} from "./providers/authorization.interceptor";
import {PaginatorModule} from 'primeng/paginator';

@NgModule({
  declarations: [
    AppComponent,
    EventCardComponent,
    EventDetailedCardComponent,
    DetailedCardListComponent,
    CardsExampleComponent,
    CarouselCardListComponent
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
