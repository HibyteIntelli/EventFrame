export enum EventCategory {
  highlights = 'HIGHLIGHTS',
  arbeitsrecht = 'ARBEITSRECHT',
  hr = 'HR&RECRUITING',
  partnerevents = 'PARTNEREVENTS'
}

export enum EventType {
  workshop = 'WORKSHOP',
  event = 'EVENT',
  seminar = 'SEMINAR',
}

export interface Event {
  id: number;
  description: string;
  name: string;
  location: string;
  startDate: string;
  startHour: string;
  type: EventType;
  category: EventCategory;
}
