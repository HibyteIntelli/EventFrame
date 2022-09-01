import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
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
          description: event.e_desc,
          startDate: event.e_s_date,
          startHour: event.e_s_hour,
          location: event.e_city,
          type: event.e_event_type,
          category: event.e_category,
          visibility: event.e_visible,
          web_visibility: event.e_website_visibility
        }))));
  }


  getEventById(id: number): Observable<Event> {
    return this.httpClient.get<any>(`${environment.apiUrl}/events/${id}`).pipe(
      map(event => ({
        id: event.e_id,
        name: event.e_name,
        description: event.e_desc,
        startDate: event.e_s_date,
        startHour: event.e_s_hour,
        location: event.e_city,
        type: event.e_event_type,
        category: event.e_category,
        visibility: event.e_visible,
        web_visibility: event.e_website_visibility
      })));
  }
}
