import { Injectable } from '@angular/core';
import {CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {SessionService} from '@portal/core/services';
import {UserRolEnum} from '@portal/core/constants';

@Injectable() // provide-in: se agrega cuando lo necesito en el modulo principal
export class RolGuard implements CanActivate, CanActivateChild {
  constructor(
    private sessionService: SessionService,
    private router: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.switchHome();
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.switchHome();
  }
  switchHome() {
    let accesss = false;
    switch (this.sessionService.getUser().role) { // sonar scanner
      case UserRolEnum.SOCIA_EMPRESARIA: this.router.navigateByUrl('/PortalFFVV/home-gr'); accesss = true; break;
      case UserRolEnum.DIRECTOR_VENTA: this.router.navigateByUrl('/PortalFFVV/home-se'); accesss = true; break;
    }
    return accesss;
  }

}
