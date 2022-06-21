import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {CarouselModule} from "primeng/carousel";
import { EventDetailedCardComponent } from './components/event-detailed-card/event-detailed-card.component';

@NgModule({
  declarations: [
    AppComponent,
    EventCardComponent,
    EventDetailedCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
