import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TokenModel} from './TokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  attemptAuth(ussername: string, password: string): Observable<TokenModel> {
    const credentials = {username: ussername, password: password};
    console.log('attempAuth ::');
    return this.http.post('http://localhost:8080/token/generate-token', credentials);
  }


}
