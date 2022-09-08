import {Component, Input, OnInit} from '@angular/core';
import {Event, EventCategory} from "../../data/event";
import {DatePipe} from '@angular/common';
import {EventsService} from '../../services/events.service';

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

  constructor(private datePipe: DatePipe,
              private eventsService: EventsService) {
  }

  ngOnInit(): void {
    if (window.screen.width <= 480) {
      this.mobile = true;
    }
  }

  getEventTime() {
    return this.datePipe.transform(this.event?.startDate, 'dd.MM.yyyy') + ' | ' + this.eventsService.getTime(this.event?.startHour)  + '-' + this.eventsService.getTime(this.event?.endHour) + ' Uhr';
  }
}
