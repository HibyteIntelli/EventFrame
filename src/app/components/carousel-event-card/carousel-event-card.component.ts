import {Component, Input, OnInit} from '@angular/core';
import {Event} from "../../data/event";
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-carousel-event-card',
  templateUrl: './carousel-event-card.component.html',
  styleUrls: ['./carousel-event-card.component.css']
})
export class CarouselEventCardComponent implements OnInit {

  @Input() events: Event[];
  filteredCarousel: Event[];
  filteredEvents: Event[] = [];

  constructor(public sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
  }

  getFilteredCarousel(): Event[] {
    return this.events.filter(event => event.visibility === 1 && event.web_visibility === 1);
  }
}
