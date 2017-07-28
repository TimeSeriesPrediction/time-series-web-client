import { Injectable } from '@angular/core';
import { Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { ApiService } from '../api-service/api.service';

import { AppConfig } from '../../app.config';

@Injectable()
export class AuthService {

  constructor(private api: ApiService, private config: AppConfig) { }

  login(username: string, password: string) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.api.post('/account/token', JSON.stringify({ username: username, password: password }), headers)
      .map((response: Response) => {
        let result = response.json();
        if (result.authToken) {
            sessionStorage.setItem('authToken', result.authToken);
        }
      });

  }

  logout() {
    sessionStorage.removeItem('authToken');
  }
}

