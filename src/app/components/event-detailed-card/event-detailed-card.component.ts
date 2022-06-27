import {Component, Input, OnInit} from '@angular/core';
import {Event} from "../../data/event";

@Component({
  selector: 'app-event-detailed-card',
  templateUrl: './event-detailed-card.component.html',
  styleUrls: ['./event-detailed-card.component.css']
})
export class EventDetailedCardComponent implements OnInit {

  @Input()
  event: Event;

  showDetails: boolean = false;
  showDetailsButtonText: string='Mehr erfahren';
  mobile: boolean;

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
