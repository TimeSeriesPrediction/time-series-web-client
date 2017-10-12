import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { AuthService } from '../../services/auth-service/auth.service';
import {User} from '../../models/user-models/User';
import {Injectable} from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppConfig } from '../../app.config';
import { AuthorisationService } from '../../services/authorisation-service/authorisation.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  providers: [AppConfig],
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private authorisation: AuthorisationService) { }

  staff: boolean =false;
  student: boolean = false;
  admin: boolean = false;


  ngOnInit() {
    this.getCurrentUser();
    this.isAdmin();
    this.isStaffMember();
    this.isStudent();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
    this.getCurrentUser();
  }
  currentUser : User;
  userName: String;

  getCurrentUser(){
    this.authService.getCurrentLoggedInUser().subscribe((user) => {
      this.currentUser = user;
      this.userName = this.currentUser.username;
    }, (error) => {
      console.log("Error happened: " + error)
    });
  }

  isStaffMember() {
    return this.authorisation.isStaffMember().then((staff) =>{
      this.staff = staff;
    });
  };

  isStudent() {
    return this.authorisation.isStudent().then((student)=> {
      this.student = student;
    });
  };

  isAdmin() {
    return this.authorisation.isAdmin().then((admin) => {
      this.admin = admin;
    });
  }

}

