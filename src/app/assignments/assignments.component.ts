
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  forwardRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { SlimScrollOptions } from 'ng2-slimscroll';
import * as moment from 'moment';
import {UsersApi} from '../services/api-service/users-api/users-api.mock';
import {User} from '../models/User';
import {Injectable} from '@angular/core';
import {ApiService} from '../services/api-service/api.service';
import { HttpModule } from '@angular/http';
import { AppConfig } from '../app.config';
const Moment: any = (<any>moment).default || moment;


@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  providers: [UsersApi,ApiService,AppConfig],
  styleUrls: ['./assignments.component.scss'],
})

export class AssignmentsComponent {

  private onTouchedCallback: () => void = () => { };
  private onChangeCallback: (_: any) => void = () => { };

  constructor(private userService : UsersApi) 
  {
  
  }
  ngOnInit()
  {
    this.getCurrentUser();
    this.getModules();
  }

  currentUser : User;

  getCurrentUser()
  {
    this.userService.getCurrentUser().subscribe(
    function(response) { this.currentUser=response},
    function(error) { console.log("Error happened" + error)},
    function() {document.getElementById('studentDeets').innerHTML=this.currentUser.username}
);
 

  }
 getModules()
  {
  
    this.userService.getCurrentUser().subscribe(
    function(response) { this.currentUser=response},
    function(error) { console.log("Error happened" + error)},
    function() 
    {
      document.getElementById("sel1").innerHTML = "";
      for (var I = 0; I < this.currentUser.modules.length; I++)
      {
          var moduleList = "<option>" + this.currentUser.modules[I] + "</option>";
          document.getElementById("sel1").innerHTML += moduleList;
          
      }
    });
  
 
}
}