import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthorizationService} from '../services/authorization.service';

@Injectable({providedIn: 'root'})
export class AuthorizationGuard implements CanActivate {

  constructor(private authorizationService: AuthorizationService) {
  }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('bearerToken')) {
      return true;
    }
    const response = await this.authorizationService.saveBearerTokenToLocalStorage().toPromise();
    localStorage.setItem('bearerToken', response.access_token);
    return true;
  }
}





