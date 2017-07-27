import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { AuthService } from '../services/auth-service/auth.service';
import {UsersApi} from '../services/api-service/users-api/users-api.mock';
import {User} from '../models/User';
import {Injectable} from '@angular/core';
import {ApiService} from '../services/api-service/api.service';
import { HttpModule } from '@angular/http';
import { AppConfig } from '../app.config';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
   providers: [UsersApi,ApiService,AppConfig],
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  constructor(private userService : UsersApi) { }

  ngOnInit() {
     this.getCurrentUser();
  }

     currentUser : User;

  getCurrentUser(){
    this.userService.getCurrentUser().subscribe(
    function(response) { this.currentUser=response},
    function(error) { console.log("Error happened" + error)},
    function() {document.getElementById('studentDeets').innerHTML=this.currentUser.username}
)
}
}