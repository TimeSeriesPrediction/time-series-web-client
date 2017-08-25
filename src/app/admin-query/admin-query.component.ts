import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service/auth.service';
import {UsersApi} from '../services/api-service/users-api/users-api.mock';
import {AssessmentsApi} from '../services/api-service/assessments-api/assessments.api.mock';
import {User} from '../models/User';
import {Assessment} from '../models/Assessment';
import {Injectable} from '@angular/core';
import {ApiService} from '../services/api-service/api.service';
import { HttpModule } from '@angular/http';
import { AppConfig } from '../app.config';

@Component({
  selector: 'app-admin-query',
  templateUrl: './admin-query.component.html',
  providers: [UsersApi,ApiService,AppConfig],
  styleUrls: ['./admin-query.component.scss']
})
export class AdminQueryComponent implements OnInit {

    //CURRENT: some mock data for interface
    //TO DO: process data received from the server
    public modules;

  constructor(private router: Router, private authService: AuthService,private userService : UsersApi, private assessmentService : AssessmentsApi) {
    this.modules =  [
        { code: 'COS301',
          queries :  [
            { code: 'COS 301', assType: 'Test', assNum: '5', student: 'u12345678', reason: "Please fix my mark." },
            { code: 'COS 301', assType: 'Assignment', assNum: '8', student: 'u12345678', reason: "Marks don't add up." },
            { code: 'COS 301', assType: 'Test', assNum: '10', student: 'u12345678', reason: "Please fix my mark." }
          ] },
        { code: 'COS132',
          queries:  [
            { code: 'COS 132', assType: 'Test', assNum: '2', student: 'u12345678', reason: "Please fix my mark." },
            { code: 'COS 132', assType: 'Assignment', assNum: '9', student: 'u12345678', reason: "Marks don't add up." },
            { code: 'COS 132', assType: 'Test', assNum: '5', student: 'u12345678', reason: "Please fix my mark." }
          ] },
        { code: 'COS212',
          queries: [
            { code: 'COS 212', assType: 'Test', assNum: '1', student: 'u12345678', reason: "Please fix my mark." },
            { code: 'COS 212', assType: 'Assignment', assNum: '2', student: 'u12345678', reason: "Marks don't add up." },
            { code: 'COS 212', assType: 'Test', assNum: '3', student: 'u12345678', reason: "Please fix my mark." }
          ] }
      ];

   }

   displayQuery(event)
   {

     //alert(event);
     document.getElementById("display").style.display = "block";
     var w = document.getElementById("higher-privilege").offsetHeight;
     document.getElementById("display").style.height = w + "px"; 

     document.getElementById("display").innerHTML = document.getElementById(event).innerHTML;
   }

  ngOnInit()
  {
    this.getCurrentUser();
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
