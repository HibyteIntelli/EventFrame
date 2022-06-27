import { Component, OnInit } from '@angular/core';
import {EventsService} from "../../services/events/events.service";
import {Event} from "../../data/event";

@Component({
  selector: 'app-carousel-card-list',
  templateUrl: './carousel-card-list.component.html',
  styleUrls: ['./carousel-card-list.component.css']
})
export class CarouselCardListComponent implements OnInit {

  events: Event[];

  constructor(private eventService: EventsService) { }

  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe(events => {
      console.log(events);
      this.events = events;
    })
  }

}
