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
  eventPrice: number;

  constructor(private eventService: EventsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.eventService.getEventById(this.route.snapshot.queryParams['event_id']).subscribe(event => {
      this.event = event;
      this.getEventPrice();
    })
  }

  getEndTime(): string {
    if (this.event?.endHour) {
      return this.event?.endHour.slice(0, this.event.endHour?.length - 3);
    }
    return '';
  }

  getEventPrice() {
    this.eventService.getEventPrice(this.event?.id).subscribe(response => this.eventPrice = response[0].ic_total_no_tax);
  }

}
