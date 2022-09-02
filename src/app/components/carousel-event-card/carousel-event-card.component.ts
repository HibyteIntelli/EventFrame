import {Component, Input, OnInit} from '@angular/core';
import {Event} from "../../data/event";
import {Router} from "@angular/router";

@Component({
  selector: 'app-carousel-event-card',
  templateUrl: './carousel-event-card.component.html',
  styleUrls: ['./carousel-event-card.component.css']
})
export class CarouselEventCardComponent implements OnInit {
  @Input()
  events: Event[];
  filteredCarousel: Event[];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  getFilteredCarousel(): Event[] {
    return this.events.filter(event => event.visibility === 1 || event.web_visibility === 1);
  }
}
