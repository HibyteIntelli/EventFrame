import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {AuthorizationService} from "../services/authorization/authorization.service";

@Injectable({providedIn: 'root'})
export class AuthorizationGuard implements CanActivate {

  constructor(private authorizationService: AuthorizationService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('bearerToken')) {
      return true;
    }

    this.authorizationService.saveBearerTokenToLocalStorage().subscribe(response => {
      localStorage.setItem('bearerToken', response.access_token);
      return true;
    });

    return false;
  }
}





