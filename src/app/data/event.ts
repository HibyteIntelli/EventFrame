export enum EventCategory {
  highlights = 'Highlights',
  arbeitsrecht = 'Arbeitsrecht',
  hr = 'HR&Recruiting',
  partnerevents = 'Partnerevents'
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
