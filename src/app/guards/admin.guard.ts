import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const isAdmin = this.userService.isAdmin();
    if (isAdmin) {
      console.log('guard admin: true');
      return true;
    } else {
      console.log('guard admin: false');
      this.router.navigate(['login']);
      return false;
    }

  }
}
