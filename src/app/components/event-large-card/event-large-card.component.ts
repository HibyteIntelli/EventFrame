import {Component, OnInit} from '@angular/core';
import {Event, EventCategory} from "../../data/event";
import {EventsService} from "../../services/events.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-event-large-card',
  templateUrl: './event-large-card.component.html',
  styleUrls: ['./event-large-card.component.css']
})
export class EventLargeCardComponent implements OnInit {

  EventCategory = EventCategory;
  event: Event;

  constructor(private eventService: EventsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.eventService.getEventById(this.route.snapshot.queryParams['event_id']).subscribe(event => {
      this.event = event;
    })
  }

}
