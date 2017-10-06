import { Injectable } from '@angular/core';
import { Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { ApiService } from '../api-service/api.service';
import { Observable } from 'rxjs/Observable';
import { AppConfig } from '../../app.config';
import { User } from '../../models/User';
import { AuthService } from '../auth-service/auth.service';
import  _  from 'underscore';

@Injectable()
export class AuthorisationService {

  user : User;

  constructor(private authentication: AuthService, private config: AppConfig) {
    authentication.getCurrentLoggedInUser().map((user) => {
      this.user = user;
    });
  }

  init(callback) {
    this.authentication.getCurrentLoggedInUser().map((user) => {
      this.user = user;
      return callback();
    });
  }

  isAdmin() {
    if (!this.user) {
      return this.init(this.isAdmin);
    }

    return this.user.permissions.admin;
  }

  isStaffMember() {
    if (!this.user) {
      return this.init(this.isStaffMember);
    }

    return _.some(this.user.permissions.modules, (mod) => {
      return mod.permission > this.config.PERMISSION_TYPE.STUDENT;
    });
  }

  getPermissionForModule(moduleCode) {
    if (!this.user) {
      return this.init(this.getPermissionForModule);
    }
  }



}
