import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Event} from "../../data/event";
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-carousel-event-card',
  templateUrl: './carousel-event-card.component.html',
  styleUrls: ['./carousel-event-card.component.css']
})
export class CarouselEventCardComponent implements OnInit, OnChanges {

  @Input() events: Event[];
  filteredCarousel: Event[];
  filteredEvents: Event[] = [];

  constructor(public sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes:SimpleChanges) {
    if (changes['events'] && this.events) {
      this.filteredEvents = this.getFilteredCarousel();
      this.filteredEvents.forEach(event => event.web_logo = this.transformImage(event.web_logo?.data));
    }
  }

  getFilteredCarousel(): Event[] {
    return this.events.filter(event => event.visibility === 1 && event.web_visibility === 1);
  }

  transformImage(eventImageData) {
    const reader = new FileReader();
    return reader.readAsDataURL(new Blob([eventImageData]));
  }
}
