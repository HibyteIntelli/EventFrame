import {Injectable} from '@angular/core';
import {lastValueFrom, map, Observable} from 'rxjs';
import {Event} from "../data/event";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private httpClient: HttpClient) {
  }

  getAllEvents(): Observable<Event[]> {
    return this.httpClient.get<any>(`${environment.apiUrl}/events`).pipe(
      map((events) => events
        .map(event => ({
          id: event.e_id,
          name: event.e_name,
          guid: event.e_event_guid,
          description: event.e_desc,
          startDate: event.e_s_date,
          startHour: event.e_s_hour,
          endHour: event.e_e_hour,
          location: event.e_city,
          type: event.e_event_type,
          category: event.e_category,
          visibility: event.e_visible,
          web_visibility: event.e_website_visibility,
          web_logo: event.e_website_logo,
          zip: event.e_zip,
          street: event.e_street,
          city: event.e_city,
          place: event.e_place,
          web_logo_mt: event.e_website_logo_mt
        }))));
  }


  getEventById(id: number): Observable<Event> {
    return this.httpClient.get<any>(`${environment.apiUrl}/events/${id}`).pipe(
      map(event => ({
        id: event.e_id,
        guid: event.e_event_guid,
        name: event.e_name,
        description: event.e_desc,
        startDate: event.e_s_date,
        startHour: event.e_s_hour,
        endHour: event.e_e_hour,
        location: event.e_city,
        type: event.e_event_type,
        category: event.e_category,
        visibility: event.e_visible,
        web_visibility: event.e_website_visibility,
        web_logo: event.e_website_logo,
        zip: event.e_zip,
        street: event.e_street,
        city: event.e_city,
        place: event.e_place,
        web_logo_mt: event.e_website_logo_mt
      })));
  }

  getEventPrice(eventId: number) {
    return this.httpClient.get<any>(`${environment.apiUrl}/invoice-configs/event/${eventId}`);
  }

  getTime(time: string): string {
    if (time) {
      return time.slice(0, time.length - 3);
    }
    return '';
  }
}
