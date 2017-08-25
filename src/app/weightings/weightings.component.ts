import { Component, OnInit } from '@angular/core';
import {UsersApi} from '../services/api-service/users-api/users-api.mock';
import {User} from '../models/User';
import {Injectable} from '@angular/core';
import {ApiService} from '../services/api-service/api.service';
import { HttpModule } from '@angular/http';
import { AppConfig } from '../app.config';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service/auth.service';
@Component({
  selector: 'app-weightings',
  templateUrl: './weightings.component.html',
   providers: [UsersApi,ApiService,AppConfig],
  styleUrls: ['./weightings.component.scss']
})
export class WeightingsComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService,private userService : UsersApi) { }

   ngOnInit() {
    this.getCurrentUser();
    //this.getModules();
  }

  logout() {
      this.authService.logout();
      this.router.navigate(['/login']);
      this.getCurrentUser();
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
