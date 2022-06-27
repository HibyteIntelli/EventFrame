import {Component, OnInit} from '@angular/core';
import {Event} from "../../data/event";
import {EventsService} from "../../services/events/events.service";

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {
  events: Event[] = [
    // {id: 1, title: 'Workshop',location:'Hannover', date: '24.05.2021', hour: 12.00},
    // {id: 2, title: 'Workshop2', location:'Hannover',date: '25.05.2021', hour: 13.00},
    // {id: 3, title: 'Workshop3',location:'Hannover', date: '25.05.2021', hour: 13.00},

  ];

  constructor(private eventsService: EventsService) {
  }

  ngOnInit(): void {
    this.eventsService.getEventById(1).subscribe(event => this.events = [event]);
  }

}
