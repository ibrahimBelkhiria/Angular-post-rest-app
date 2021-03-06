import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: string;
  role: string;
  token: string;
  constructor(private jwtHelper: JwtHelperService ) {

    if (this.isAuthenticated()) {
      this.token = localStorage.getItem('access_token');
      this.user = this.jwtHelper.decodeToken(localStorage.getItem('access_token')).sub;
      this.role = this.jwtHelper.decodeToken(localStorage.getItem('access_token')).scopes;
    }

  }



  isAuthenticated() {
    if (localStorage.getItem('access_token') != null) {
      this.role = this.jwtHelper.decodeToken(localStorage.getItem('access_token')).scopes;
      return true;
    } else {
      return false;
    }
  }

  isAdmin() {
    if (this.role === 'ROLE_ADMIN') {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('access_token');
    this.user = null;
    this.role = null;
  }

}
