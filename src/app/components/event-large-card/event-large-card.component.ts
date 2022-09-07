import {Component, OnInit} from '@angular/core';
import {Event, EventCategory} from "../../data/event";
import {EventsService} from "../../services/events.service";
import {ActivatedRoute} from "@angular/router";
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-event-large-card',
  templateUrl: './event-large-card.component.html',
  styleUrls: ['./event-large-card.component.css']
})
export class EventLargeCardComponent implements OnInit {

  EventCategory = EventCategory;
  event: Event;
  eventPrice: number = 0;

  constructor(private eventService: EventsService, private route: ActivatedRoute, private datePipe: DatePipe) {
  }

  ngOnInit(): void {
    this.eventService.getEventById(this.route.snapshot.queryParams['event_id']).subscribe(event => {
      this.event = event;
      this.getEventPrice();
    })
  }

  getEventTime(): string {
    if (this.getTime(this.event?.startHour) === '00:00' && this.getTime(this.event?.endHour) === '23:59') {
      return 'Ganztägig';
    } else {
      return this.datePipe.transform(this.event?.startDate, 'dd.MM.yyyy | HH:mm') + '-' + this.getTime(this.event?.endHour) + ' Uhr';
    }
  }

  getTime(time: string): string {
    if (time) {
      return time.slice(0, time.length - 3);
    }
    return '';
  }

  getEventPrice() {
    this.eventService.getEventPrice(this.event?.id).subscribe(response => this.eventPrice = response[0]?.ic_total_no_tax + response[0]?.ic_tax);
  }

}
