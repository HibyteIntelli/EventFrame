import {Component, OnInit} from '@angular/core';
import {Event} from "../../data/event";
import {EventsService} from "../../services/events/events.service";

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {
  events: Event[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
