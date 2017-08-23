import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {User} from '../../../models/User';
import {Assessment} from '../../../models/Assessment';
import {Observable} from 'rxjs/Rx';
import {Response} from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class UsersApi {

  constructor(private _api : ApiService){

  }

  getCurrentUser() : Observable<User>{
    var user = new User("u123456789", "u123456789@tuks.co.za",["COS132", "COS151", "COS212"]);

    return Observable.of(user);
  }
  

}