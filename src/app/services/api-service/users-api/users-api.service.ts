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

  addUsers(users: AddUserModel[]) : Observable<String> {// check the format of the object that is sent here against the one that is sent in postman, not the same structure. Postman adds "user" property, where this one only sends an array of objects.
    return this._api.post('/users/add-users', { users: users})
      .map((response: Response) => <String>response.json().message);
  }

  addUser(user: AddUserModel) : Observable<String> {
    return this._api.post('/users/', { username: user.username, password: user.password, email: user.email, fullname : user.fullname})
      .map((response: Response) => <String>response.json().message);
  }

}
