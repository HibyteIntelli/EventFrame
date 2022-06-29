import {Component, OnInit} from '@angular/core';
import {EventsService} from "../../services/events.service";
import {Event, EventCategory} from "../../data/event";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-carousel-card-list',
  templateUrl: './carousel-card-list.component.html',
  styleUrls: ['./carousel-card-list.component.css']
})
export class CarouselCardListComponent implements OnInit {

  events: Event[] = [];

  constructor(private eventService: EventsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const routeType = this.route.snapshot.queryParams['type'];
    const routeCategory = this.route.snapshot.queryParams['category'];

    if (routeType) {
      const splittedTypes = routeType.split(",", 3);
      this.eventService.getAllEvents().subscribe(events => {
        let unfilteredEvents = events;
        splittedTypes.forEach(type => {
          const evs = unfilteredEvents?.filter(event => event.type === type);
          this.events = this.events.concat(evs);
        });
      });
    }

    if (routeCategory) {
      const splittedCategories = routeCategory.split(",", 4);
      this.eventService.getAllEvents().subscribe(events => {
        let unfilteredEvents = events;
        let evs: Event[] = [];
        splittedCategories.forEach(category => {
          if (category == 'HR') {
            evs = unfilteredEvents?.filter(event => event.category == EventCategory.hr);
          } else {
            evs = unfilteredEvents?.filter(event => event.category === category);
          }
          this.events = this.events.concat(evs);
        });
      });
    }
  }
}
