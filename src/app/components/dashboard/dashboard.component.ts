import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { AuthService } from '../../services/auth-service/auth.service';
import {User} from '../../models/user-models/User';
import {Injectable} from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppConfig } from '../../app.config';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  providers: [AppConfig],
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.getCurrentUser();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
    this.getCurrentUser();
  }
  currentUser : User;

  getCurrentUser(){
    this.authService.getCurrentLoggedInUser().subscribe((user) => {
      this.currentUser = user;
    }, (error) => {
      console.log("Error happened: " + error)
    });
  }

}

