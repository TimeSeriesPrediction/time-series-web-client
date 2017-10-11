import { Injectable } from '@angular/core';
import { Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { ApiService } from '../api-service/api.service';
import { Observable } from 'rxjs/Observable';
import { AppConfig } from '../../app.config';
import { User } from '../../models/user-models/User';
import { AuthService } from '../auth-service/auth.service';
import  { _ }  from 'underscore';

@Injectable()
export class AuthorisationService {

  user : User;

  constructor(private authentication: AuthService, private config: AppConfig) {
    this.init();
  }

  init() {
    this.authentication.getCurrentLoggedInUser()
    .subscribe((user) => {
      this.user = user;
    });
  }

  isAdmin() {
    if (!this.user) {
      return this.init();
    }

    return this.user.permissions.admin;
  }

  isStaffMember() {
    if (!this.user) {
      return this.init();
    }

    return _.some(this.user.permissions.modules, (mod) => {
      return mod.permission > this.config.PERMISSION_TYPE.STUDENT;
    });
  }

  getPermissionForModule(moduleCode) {
    if (!this.user) {
      return this.init();
    }

    var mod = _.findWhere(this.user.permissions.modules, {moduleCode: moduleCode});

    return !mod ? 0 : mod.permission;
  }

  isStudent(moduleCode) {
    if (!this.user) {
      return this.init();
    }

    var mod = _.findWhere(this.user.permissions.modules, {moduleCode: moduleCode});

    return mod && mod.permission == this.config.PERMISSION_TYPE.STUDENT;
  };

  isStaffMemberForModule(moduleCode) {
    if (!this.user) {
      return this.init();
    }

    var mod = _.findWhere(this.user.permissions.modules, {moduleCode: moduleCode});

    return mod && mod.permission >= this.config.PERMISSION_TYPE.ADMIN_VIEW;
  };

}
