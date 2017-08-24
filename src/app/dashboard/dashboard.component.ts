import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { AuthService } from '../services/auth-service/auth.service';
import {UsersApi} from '../services/api-service/users-api/users-api';
import {User} from '../models/User';
import {Injectable} from '@angular/core';
import {ApiService} from '../services/api-service/api.service';
import { HttpModule } from '@angular/http';
import { AppConfig } from '../app.config';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  providers: [UsersApi,ApiService,AppConfig],
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService,private userService : UsersApi) { }

  ngOnInit() {
    this.getCurrentUser();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
    this.getCurrentUser();
  }
  currentUser : any = {};

  getCurrentUser(){
    this.userService.getCurrentUser().subscribe((user) => {
      this.currentUser = user;
    }, (error) => {
      console.log("Error happened: " + error)
    });
  }

}

