import {Component, OnInit} from '@angular/core';
import {EventsService} from "../../services/events/events.service";
import {Event} from "../../data/event";

@Component({
  selector: 'app-cards-example',
  templateUrl: './cards-example.component.html',
  styleUrls: ['./cards-example.component.css']
})
export class CardsExampleComponent implements OnInit {

  event: Event;

  constructor(private eventsService: EventsService) {
  }

  ngOnInit(): void {
    // this.eventsService.getEventById(1).subscribe(event => {
    //   this.event = event;
    // });
  }
}
