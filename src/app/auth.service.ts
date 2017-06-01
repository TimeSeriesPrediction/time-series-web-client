import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  login(username: string, password: string) {
    return this.http.post('/account/token', JSON.stringify({ username: username, password: password }))
      .map((response: Response) => {
        let authtoken = response.json();
        if (authtoken) {
          localStorage.setItem('authToken', JSON.stringify(authtoken));
        }
      });
  }
 
  logout() {
    localStorage.removeItem('authToken');
  }
}