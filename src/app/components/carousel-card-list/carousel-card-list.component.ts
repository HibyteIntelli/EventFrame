import {Component, OnInit} from '@angular/core';
import {EventsService} from "../../services/events.service";
import {Event} from "../../data/event";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-carousel-card-list',
  templateUrl: './carousel-card-list.component.html',
  styleUrls: ['./carousel-card-list.component.css']
})
export class CarouselCardListComponent implements OnInit {

  events: Event[];

  constructor(private eventService: EventsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const routeType = this.route.snapshot.queryParams['type'];
    const routeCategory = this.route.snapshot.queryParams['category'];

    this.eventService.getAllEvents().subscribe(events => {
      this.events = events;

      if(routeType) {
        this.events = this.events?.filter(event => event.type === routeType);
      }

      if(routeCategory) {
        this.events = this.events?.filter(event => event.category === routeCategory);
      }
    });
  }
}
