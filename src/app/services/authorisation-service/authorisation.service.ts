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
    return new Promise((resolve, reject) => {
      this.authentication.getCurrentLoggedInUser()
      .subscribe((user) => {
        this.user = user;
        resolve();
      }, reject);
    });
  }

  isAdmin() : Promise<boolean> {
    return new Promise( (resolve, reject) => {
      if (!this.user) {
        return this.init().then(() => {
          resolve(this.user.permissions.admin);
        });
      }
  
      resolve(this.user.permissions.admin);
    });

  }

  isStaffMember() : Promise<boolean>{
    return new Promise((resolve, reject) => {
      if (!this.user) {
        return this.init().then(() =>{
          resolve( _.some(this.user.permissions.modules, (mod) => {
            return mod.permission > this.config.PERMISSION_TYPE.STUDENT;
          }))
        });
      }
  
      resolve(_.some(this.user.permissions.modules, (mod) => {
        return mod.permission > this.config.PERMISSION_TYPE.STUDENT;
      }))
    });


  }

  getPermissionForModule(moduleCode): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (!this.user) {
        return this.init().then(() => {
          var mod = _.findWhere(this.user.permissions.modules, {moduleCode: moduleCode});
          
          return resolve(!mod ? 0 : mod.permission);
        });
      }
  
      var mod = _.findWhere(this.user.permissions.modules, {moduleCode: moduleCode});
  
      return resolve(!mod ? 0 : mod.permission);
    });

  }

  isStudent() : Promise <boolean> {
    return new Promise( (resolve, reject) => {
      if (!this.user) {
        return this.init().then(() => {
          return resolve(_.some(this.user.permissions.modules, (mod) => {
            return mod.permission = this.config.PERMISSION_TYPE.STUDENT;
          }));
        });
      }
  
      return resolve(_.some(this.user.permissions.modules, (mod) => {
        return mod.permission = this.config.PERMISSION_TYPE.STUDENT;
      }));
    });


  }

  isStudentForModule(moduleCode) : Promise <boolean> {
    return new Promise((resolve, reject) => {
      if (!this.user) {
        return this.init().then(() => {
          var mod = _.findWhere(this.user.permissions.modules, {moduleCode: moduleCode});
          
          return resolve(mod && mod.permission == this.config.PERMISSION_TYPE.STUDENT);
        });
      }
  
      var mod = _.findWhere(this.user.permissions.modules, {moduleCode: moduleCode});
      
      return resolve(mod && mod.permission == this.config.PERMISSION_TYPE.STUDENT);
    });
  };

  isStaffMemberForModule(moduleCode) : Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (!this.user) {
        return this.init().then(() => {
          var mod = _.findWhere(this.user.permissions.modules, {moduleCode: moduleCode});
          
          return resolve(mod && mod.permission >= this.config.PERMISSION_TYPE.ADMIN_VIEW);
        });
      }
  
      var mod = _.findWhere(this.user.permissions.modules, {moduleCode: moduleCode});
      
      return resolve(mod && mod.permission >= this.config.PERMISSION_TYPE.ADMIN_VIEW);
    });
  };

}
