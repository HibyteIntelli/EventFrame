import {Component, Input, OnInit} from '@angular/core';
import {Event} from "../../data/event";
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {DatePipe} from '@angular/common';
import {EventsService} from '../../services/events.service';

@Component({
  selector: 'app-carousel-event-card',
  templateUrl: './carousel-event-card.component.html',
  styleUrls: ['./carousel-event-card.component.css']
})
export class CarouselEventCardComponent implements OnInit {

  @Input() events: Event[];

  constructor(public sanitizer: DomSanitizer,
              private datePipe: DatePipe,
              private eventService: EventsService) {
  }

  ngOnInit(): void {
  }

  getFilteredCarousel(): Event[] {
    return this.events.filter(event => event.visibility === 1 && event.web_visibility === 1 && event.state > 3 && new Date(event.endDate).getTime() > Date.now()).sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
  }

  public getImage(event: Event): SafeResourceUrl {
    if (event?.web_logo?.data) {
      let mime_type = '';
      event.web_logo_mt ? mime_type = event.web_logo_mt : mime_type = 'image/jpeg';
      var binary = '';
      var bytes = new Uint8Array( event?.web_logo?.data );
      var len = bytes.byteLength;
      for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
      }
      return this.sanitizer.bypassSecurityTrustResourceUrl(`data:${mime_type};base64,${binary}`)
    } else {
      return 'assets/default-img.jpeg';
    }
  }

  getEventTime(event: Event) {
    return this.datePipe.transform(event?.startDate, 'dd.MM.yyyy') + ' | ' + this.eventService.getTime(event?.startHour) + ' Uhr';
  }

}
