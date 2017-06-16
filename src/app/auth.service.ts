import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AppConfig } from './app.config'

@Injectable()
export class AuthService {

  constructor(private http: Http, private config: AppConfig) { }

  login(username: string, password: string, remember: boolean) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.config.apiUrl + '/account/token', JSON.stringify({ username: username, password: password }), {headers: headers})
      .map((response: Response) => {
        let result = response.json();
        if (result.authToken) {
          if (remember)
          {
            localStorage.setItem('authToken', result.authToken);
          }
          else
          {
            sessionStorage.setItem('authToken', result.authToken);
          }
        }
      });
  }
 
  logout() {
    sessionStorage.removeItem('authToken');
    localStorage.removeItem('authToken');
  }
}

