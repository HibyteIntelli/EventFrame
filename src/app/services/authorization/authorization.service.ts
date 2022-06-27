import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private httpClient: HttpClient) {
  }

  saveBearerTokenToLocalStorage() {
    return this.httpClient.get<any>(environment.authUrl, {
      headers: {
        Authorization: 'Api-Key ' + environment.apiKey,
      }
    });
  }

  getBearerToken() {
    return localStorage.getItem('bearerToken');
  }
}
