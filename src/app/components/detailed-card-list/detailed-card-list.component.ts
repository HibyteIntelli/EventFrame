import {Component, OnInit} from '@angular/core';
import {EventsService} from '../../services/events/events.service';
import {Event} from '../../data/event';
import {from} from 'rxjs';

@Component({
  selector: 'app-detailed-card-list',
  templateUrl: './detailed-card-list.component.html',
  styleUrls: ['./detailed-card-list.component.css']
})
export class DetailedCardListComponent implements OnInit {
  events: Event[];
  filteredEvents: Event[];

  constructor(private eventService: EventsService) {
  }

  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe(events => {
      this.events = events.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
      this.paginateData(0);
    })
  }

  paginateData(fromIndex: number) {
    this.filteredEvents = this.events.slice(fromIndex, fromIndex + 4);
  }

  changePage($event) {
    this.paginateData(4 * $event.page);
  }
}
