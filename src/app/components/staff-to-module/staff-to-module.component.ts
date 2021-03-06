import { Component, OnInit } from '@angular/core';
import {UsersApi} from '../../services/api-service/users-api/users-api.service';
import {AuthService} from  '../../services/auth-service/auth.service';
import {User} from '../../models/user-models/User';
import {AppConfig} from '../../app.config';
import { ModulesApi } from '../../services/api-service/modules-api/modules-api.service';
import { Module } from '../../models/Module';
import {_} from 'underscore';
import {MdSnackBar,MdSnackBarModule} from '@angular/material';

@Component({
  selector: 'app-staff-to-module',
  templateUrl: './staff-to-module.component.html',
  styleUrls: ['./staff-to-module.component.scss']
})
export class StaffToModuleComponent implements OnInit {

  constructor(private userService : UsersApi,
    public authService : AuthService,
    public conf : AppConfig,
    private modulesApi: ModulesApi,
    private snackBar: MdSnackBar
   )
  {

  }

  permissions = Object.keys(this.conf.PERMISSION_TYPE);
  modules: Module[];
  moduleCode: string;
  username: string;
  permission: string;

  ngOnInit()
  {
    this.getModules();
  }

  getModules() {
    this.modulesApi.getAllModules().subscribe((mods) => {
      this.modules = mods;
    })
  }


  staffToModule()
  {
    if(this.username == "" || this.moduleCode == null || this.permissions == null){
      this.snackBar.open("Failure: Please fill in al the fields!", 'OK', {
        duration: 4000,
      });
      return;
    }

    this.modulesApi.addStaffToModule(this.moduleCode, this.username, _.indexOf(this.permissions, this.permission) + 1).subscribe((message) => {
      this.snackBar.open("Success : " + message + " !", 'OK', {
        duration: 4000,
      });
      this.username = '';
    },(message) => {

      alert(JSON.parse(message._body).message);
    });
  }


}
