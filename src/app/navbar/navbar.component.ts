import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {



  constructor(private userService: UserService) {
   /* this.authenticated = userService.isAuthenticated();
    this.isAdmin = userService.isAdmin();*/
  }

  ngOnInit() {
  }
    isAuthenticated(): boolean {
    console.log('is authenticated: ' + this.userService.isAuthenticated());
      return this.userService.isAuthenticated();

    }

    isAdmin(): boolean {
    console.log('is admin: ' + this.userService.isAdmin());
    return this.userService.isAdmin();
    }

  logout() {
    this.userService.logout();
  }
}
