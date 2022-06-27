import {Component, OnInit} from '@angular/core';
import {EventsService} from "../../services/events/events.service";
import {Event} from "../../data/event";

@Component({
  selector: 'app-detailed-card-list',
  templateUrl: './detailed-card-list.component.html',
  styleUrls: ['./detailed-card-list.component.css']
})
export class DetailedCardListComponent implements OnInit {
  events: Event[];

  constructor(private eventService: EventsService) {
  }

  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe(events => {
      console.log(events)
      this.events = events;
    })
  }
}
