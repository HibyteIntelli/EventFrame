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

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goToEvent(id: number) {
    this.router.navigate([`event/${id}`]);
  }
}
