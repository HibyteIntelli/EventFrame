import {Component, OnInit} from '@angular/core';
import {Event,  EventCategory} from "../../data/event";
import {EventsService} from "../../services/events.service";

@Component({
  selector: 'app-event-large-card',
  templateUrl: './event-large-card.component.html',
  styleUrls: ['./event-large-card.component.css']
})
export class EventLargeCardComponent implements OnInit {


  events: Event[];
  EventCategory = EventCategory;
  event: Event;
  constructor(private eventService: EventsService) { }

  ngOnInit(): void {
    this.eventService.getEventById(1).subscribe(event => {
      this.event = event;
    })
    console.log(this.event)
  }



}
