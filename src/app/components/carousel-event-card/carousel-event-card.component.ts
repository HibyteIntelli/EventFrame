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
  currentPage: number = 0;

  constructor(public sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
  }

  getFilteredCarousel(): Event[] {
    return this.events.filter(event => event.visibility === 1 && event.web_visibility === 1);
  }

  changeImage($event) {
    this.currentPage = $event.page;
  }

  getSrc() {
    if (Math.abs(this.currentPage % 2) === 1) {
      return 'https://dev.codelords.de/agv-bs/wp-content/uploads/Bildschirmfoto-2022-08-09-um-12.15.03.png'
    } else {
      return 'https://dev.codelords.de/agv-bs/wp-content/uploads/Bildschirmfoto-2022-08-17-um-14.43.51.png';
    }
  }

}
