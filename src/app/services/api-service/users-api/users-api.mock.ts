import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {User} from '../../../models/user-models/User';
import {Assessment} from '../../../models/Assessment';
import {Observable} from 'rxjs/Rx';
import {Response} from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class UsersApi {

  constructor(private _api : ApiService){

  }

  getCurrentUser() : Observable<User>{
    var user = new User("u123456789", "Jim", "u123456789@tuks.co.za",{ admin: true, modules: ["COS132", "COS151", "COS110","COS121","COS122"] } );

    return Observable.of(user);
  }


}
