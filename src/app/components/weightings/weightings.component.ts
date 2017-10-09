import { Component, OnInit } from '@angular/core';
import { UsersApi } from '../../services/api-service/users-api/users-api.mock';
import { User } from '../../models/user-models/User';
import { Injectable } from '@angular/core';
import { ApiService } from '../../services/api-service/api.service';
import { HttpModule } from '@angular/http';
import { AppConfig } from '../../app.config';
@Component({
  selector: 'app-weightings',
  templateUrl: './weightings.component.html',
  providers: [UsersApi, ApiService, AppConfig],
  styleUrls: ['./weightings.component.scss']
})
export class WeightingsComponent implements OnInit {

  constructor(private userService: UsersApi) { }

  ngOnInit() {
  }

}
