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
  guid: string;
  startDate: string;
  startHour: string;
  endHour: string;
  type: EventType;
  category: EventCategory;
  visibility: number;
  web_visibility: number;
  web_logo: any;
  zip: string;
  city: string;
  street: string;
  place: string;
  web_logo_mt: string;
}
