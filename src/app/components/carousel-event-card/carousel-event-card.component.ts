import {Component, Input, OnInit} from '@angular/core';
import {Event} from "../../data/event";
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

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

  public getImage(event: Event): SafeResourceUrl {
    if (event?.web_logo?.data) {
      var binary = '';
      var bytes = new Uint8Array( event?.web_logo?.data );
      var len = bytes.byteLength;
      for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
      }
      return this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/jpeg;base64,${binary}`)
    } else {
      return 'assets/default-img.jpeg';
    }
  }

}
