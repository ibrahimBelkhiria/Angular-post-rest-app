import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  username: string;
  password: string;

  constructor(private  authService: AuthService, private router: Router) { }

  jwtHelper: JwtHelperService = new JwtHelperService();
  login(username, password) {
    this.authService.attemptAuth(username, password).subscribe(data => {

        const decoded = this.jwtHelper.decodeToken(data.token);
        console.log(decoded);
        localStorage.removeItem('access_token');
        localStorage.setItem('access_token',  data.token);
        this.router.navigate(['post']);
    }, error1 => {/*dosmothing*/ });
  }

}
