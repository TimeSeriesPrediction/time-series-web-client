import { Injectable } from '@angular/core';
import { Headers, Response } from '@angular/http';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';
import { ApiService } from '../api-service/api.service';
import { Observable } from 'rxjs/Observable';
import { AppConfig } from '../../app.config';
import { User } from '../../models/user-models/User';

@Injectable()
export class AuthService {

  constructor(private api: ApiService, private config: AppConfig, private router:  Router) { }

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

  resetPassword(token : String, newPassword: String) : Observable<String>{
    return this.api.post('/account/reset-password', {token: token, password: newPassword})
      .map((response: Response) => <String>response.json().message);
  }

  requestPasswordReset(email: String) : Observable<String> {
    return this.api.post('/account/forgot-password', {email: email})
      .map((response: Response) => <String>response.json().message);
  }

  getCurrentLoggedInUser() : Observable<User>{
    return this.api.get('/users/profile')
      .map((response: Response) => {
        return <User>response.json().user;
      })
      .catch((err, user) => {
        this.router.navigate(['/login']);
        return Observable.empty();
      });
  }

  getUserDetails(userId: String) {
    return this.api.get('/users/' + userId)
      .map((response: Response) => <User>response.json());
  }

  requestAnalysis(csvName: String, analysisType: String, date: String) : Observable<String> {
    return this.api.post('/analysis', {csvName: csvName, analysisType: analysisType, date: date})
      .map((response: Response) => <String>response.json().message);
  }

}
