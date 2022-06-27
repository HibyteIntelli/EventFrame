import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AuthorizationService} from '../services/authorization/authorization.service';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  constructor(private authorizationService: AuthorizationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    if (!request.url.endsWith('api-key')) {
      const bearerToken = this.authorizationService.getBearerToken();
      if (bearerToken) {
        request = request.clone({setHeaders: {Authorization: `Bearer ${bearerToken}`}});
        return next.handle(request);
      } else {
        this.authorizationService.saveBearerTokenToLocalStorage().subscribe(response => {
          localStorage.setItem('bearerToken', response.access_token);
          request = request.clone({setHeaders: {Authorization: `Bearer ${bearerToken}`}});
          return next.handle(request);
        });
      }
    }
    return next.handle(request);
  }

}
