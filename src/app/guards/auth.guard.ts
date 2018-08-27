import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from '../user.service';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService, private jwtHelper: JwtHelperService) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (!this.jwtHelper.isTokenExpired(this.userService.token)) {
        console.log('guard auth: true');
        return true;

      } else {
        console.log('guard auth: false');
        this.router.navigate(['login'], {queryParams: {redirectTo: state.url}});
        return false;
      }
  }
}
