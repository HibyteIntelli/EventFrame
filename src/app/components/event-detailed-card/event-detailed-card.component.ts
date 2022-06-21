import {Component, OnInit} from '@angular/core';
import {Event} from "../../data/event";

@Component({
  selector: 'app-event-detailed-card',
  templateUrl: './event-detailed-card.component.html',
  styleUrls: ['./event-detailed-card.component.css']
})
export class EventDetailedCardComponent implements OnInit {
  event: Event;
  showDetails: boolean = false;
  showDetailsButtonText: string='Mehr erfahren';

  constructor() {
  }

  ngOnInit(): void {
    this.event = {id: 1, title: 'Workshop', location:'Hannover', date: '24.05.2021', hour: 12.00};
  }

  showEventDetails() {
    this.showDetails=!this.showDetails;
    if(this.showDetails) {
      this.showDetailsButtonText='Weniger anzeigen';
    } else {
      this.showDetailsButtonText='Mehr erfahren';
    }
  }
}
