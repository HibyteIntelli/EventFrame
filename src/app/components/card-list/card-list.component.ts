import {Component, OnInit} from '@angular/core';
import {EventsService} from '../../services/events.service';
import {Event, EventCategory, EventType} from '../../data/event';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  events: Event[];
  allEvents: Event[];
  filteredEvents: Event[];
  categories: { label: string, type: EventCategory }[] = [{
    label: EventCategory.arbeitsrecht,
    type: EventCategory.arbeitsrecht
  }, {label: 'HR & RECRUITING', type: EventCategory.hr}, {
    label: 'HIGHLIGHTS',
    type: EventCategory.highlights
  }, {label: 'PARTNER EVENTS', type: EventCategory.partnerevents}];
  types: EventType[] = [EventType.event, EventType.seminar, EventType.workshop];
  isTypeFilterVisible: boolean = false;
  selectedCategory: string;
  sorting: 'desc' | 'asc' = 'desc';
  selectedType: string;
  pageCount: number;
  selectedPage = 0;

  constructor(private eventService: EventsService) {
  }

  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe(events => {
      this.allEvents = events;
      this.events = events.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
      this.calculatePageCount();
      this.paginateData(0);
    })
  }

  calculatePageCount() {
    this.pageCount = Math.ceil(this.events.length / 4);
  }

  paginateData(fromIndex: number) {
    this.filteredEvents = this.events.slice(fromIndex, fromIndex + 4);
  }

  changePage($event) {
    this.paginateData(4 * $event);
    this.selectedPage = $event;
  }

  showTypeFilters() {
    this.isTypeFilterVisible = !this.isTypeFilterVisible;
  }

  filterByCategory(category: EventCategory) {
    if (this.selectedCategory === category) {
      this.events = this.allEvents.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
      this.selectedCategory = "";
    } else {
      this.events = this.allEvents?.filter(event => event.category === category);
      this.selectedCategory = category;
    }
    this.calculatePageCount();
    this.paginateData(0);
    this.selectedPage = 0;
  }

  filterByType(type: EventType) {
    if (this.selectedType === type) {
      this.events = this.allEvents.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
      this.selectedType = "";
    } else {
      this.events = this.allEvents.filter(event => event.type === type);
      this.selectedType = type;
    }
    this.calculatePageCount();
    this.paginateData(0);
    this.selectedPage = 0;
  }

  sortByDate() {
    if (this.sorting === 'desc') {
      this.events = this.events.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
      this.sorting = 'asc';
    } else {
      this.events = this.events.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
      this.sorting = 'desc';
    }
    this.paginateData(0);
  }

  removeTypeFilter(type: string) {
    this.events = this.allEvents.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
    this.calculatePageCount();
    this.paginateData(0);
    this.selectedPage = 0;
    this.selectedType = type;
  }
}
