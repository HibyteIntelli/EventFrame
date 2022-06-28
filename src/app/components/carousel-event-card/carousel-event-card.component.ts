import {Component, Input, OnInit} from '@angular/core';
import {Event} from "../../data/event";
import {EventsService} from "../../services/events.service";

@Component({
  selector: 'app-carousel-event-card',
  templateUrl: './carousel-event-card.component.html',
  styleUrls: ['./carousel-event-card.component.css']
})
export class CarouselEventCardComponent implements OnInit {
  @Input()
  events: Event[];

  constructor() {
  }

  ngOnInit(): void {
  }
}
