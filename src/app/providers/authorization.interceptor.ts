import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {catchError, map} from "rxjs";
import {AuthorizationService} from "../services/authorization/authorization.service";
import {Router} from "@angular/router";

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  private currentUrl: string;

  constructor(private router: Router, private authorizationService: AuthorizationService) {
    this.currentUrl = this.router.url;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.currentUrl.endsWith('api-key')) {
      const bearerToken = this.authorizationService.getBearerToken();
      if (bearerToken) {
        console.log("VALID BEARER TOKEN LOG");
        request = request.clone({setHeaders: {Authorization: `Bearer ${bearerToken}`}});
        return next.handle(request);
      }
      return next.handle(request)
        .pipe(
          map((event: HttpEvent<any>) => {
            console.log("BEFORE RETURN EVENT LOG");
            return event;
          }),
          catchError((error: HttpErrorResponse) => {
            if (error.error.statusCode === 401) {
              this.authorizationService.saveBearerTokenToLocalStorage().subscribe(response => {
                localStorage.setItem('bearerToken', response.access_token);
                request = request.clone({setHeaders: {Authorization: `Bearer ${bearerToken}`}});
              });
              console.log("401 AFTER CLONE");
              return next.handle(request);
            }
            console.log("ERROR WITH OTHER STATUS CODE");
            return next.handle(request);
          }));
    }
    console.log("NO API-KEY REQUEST");
    return next.handle(request);
  }

}
