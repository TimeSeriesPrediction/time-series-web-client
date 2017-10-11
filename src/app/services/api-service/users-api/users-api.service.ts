import {Injectable} from '@angular/core';
import { ApiService } from '../api.service';
import {Assessment} from '../../../models/Assessment';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http'
import {AddUserModel} from '../../../models/user-models/AddUserModel';
import 'rxjs/add/operator/map';
import {User} from '../../../models/user-models/User';
@Injectable()
export class UsersApi {

  constructor(private _api : ApiService){

  }

  addUsers(users: AddUserModel[]) : Observable<String> {
    return this._api.post('/users/add-users', { users: users})
      .map((response: Response) => <String>response.json().message);
  }

  addUser(userId: String, password: String, email: String) : Observable<String> {
    return this._api.post('/users/', { userId: userId, password: password, email: email})
      .map((response: Response) => <String>response.json().message);
  }

}
