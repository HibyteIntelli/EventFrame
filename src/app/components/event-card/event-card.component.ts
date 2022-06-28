import {Component, Input, OnInit} from '@angular/core';
import {Event, EventCategory} from "../../data/event";

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

  @Input()
  event: Event;

  showDetails: boolean = false;
  showDetailsButtonText: string='Mehr erfahren';
  mobile: boolean;
  EventCategory = EventCategory;

  constructor() {
  }

  ngOnInit(): void {
    if (window.screen.width <=480) {
      this.mobile = true;
    }
  }

  showEventDetails() {
    this.showDetails=!this.showDetails;
    if(this.showDetails) {
      this.showDetailsButtonText='^';
    } else {
      this.showDetailsButtonText='Mehr erfahren';
    }
  }
}
