import { Component, OnInit } from '@angular/core';
import {UsersApi} from '../../services/api-service/users-api/users-api.mock';
import {User} from '../../models/user-models/User';
import {Injectable} from '@angular/core';
import {ApiService} from '../../services/api-service/api.service';
import { HttpModule } from '@angular/http';
import { AppConfig } from '../../app.config';
@Component({
  selector: 'app-grading',
  templateUrl: './grading.component.html',
  providers: [UsersApi,ApiService,AppConfig],
  styleUrls: ['./grading.component.scss']
})
export class GradingComponent implements OnInit {

  constructor(private userService : UsersApi) { }

   ngOnInit() {
    this.getCurrentUser();
    //this.getModules();
  }
     currentUser : User;

  getCurrentUser(){
    this.userService.getCurrentUser().subscribe(
    function(response) { this.currentUser=response},
    function(error) { console.log("Error happened" + error)}
)
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
