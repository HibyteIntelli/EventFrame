import {Component, OnInit} from '@angular/core';
import {EventsService} from "../../services/events/events.service";
import {Event} from "../../data/event";
import {WorkshopsService} from '../../services/workshops/workshops.service';
import {Workshop} from '../../data/workshop';
import {map} from 'rxjs';

@Component({
  selector: 'app-cards-example',
  templateUrl: './cards-example.component.html',
  styleUrls: ['./cards-example.component.css']
})
export class CardsExampleComponent implements OnInit {

  event: Event;
  workshops: Workshop[] = [];

  constructor(private eventsService: EventsService,
              private workshopService: WorkshopsService) {
  }

  ngOnInit(): void {
    this.getWorkshops();
  }

  getWorkshops() {
    this.workshopService.getAll().pipe(
      map((items) => items
        .map(item => ({ id: item.e_id, title: item.e_name, category: item.e_category, location: item.e_location, date: item.e_date, hour: item.e_hour}))),
    ).subscribe(mappedItems => this.workshops = mappedItems);
  }
}
