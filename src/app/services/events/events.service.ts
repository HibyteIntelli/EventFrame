import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Event} from "../../data/event";
import {HttpClient} from "@angular/common/http";
import {AuthorizationService} from "../authorization/authorization.service";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private httpClient: HttpClient) {
  }

  getAllEvents() {

  }

  getEventById(id: number): Observable<Event> {
    return this.httpClient.get<Event>(`${environment.apiUrl}/events`);
  }
}
