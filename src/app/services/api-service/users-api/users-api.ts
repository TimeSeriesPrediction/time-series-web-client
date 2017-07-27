import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {User} from '../../../models/User';
import {Assessment} from '../../../models/Assessment';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class UsersApi {

  constructor(private _api : ApiService){

  }

  getCurrentUser() : Observable<User>{
    return this._api.get('/users/profile')
      .map((response: Response) => <User>response.json());
  }

}
