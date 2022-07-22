import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';

import { RoutersEnum } from '../enums/routers.enum';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private tokenService: TokenService, 
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    if (this.tokenService.getToken()) return of(true);
    else {
      this.router.navigate(['/' + RoutersEnum.Auth]);

      return of(false);
    }
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate(route, state);
  }
}
