import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Module } from '../../models/Module';
import { ModulesApi } from '../../services/api-service/modules-api/modules-api.service';
import { Assessment } from '../../models/Assessment';
import { _ } from 'underscore';
import { AuthService } from '../../services/auth-service/auth.service';
import {User} from '../../models/user-models/User';

@Component({
  selector: 'app-my-marks',
  templateUrl: './my-marks.component.html',
  styleUrls: ['./my-marks.component.scss']
})
export class MyMarksComponent implements OnInit {

  moduleCode: String;
  module: Module = new Module();
  assessments: Assessment[] = [];
  user: User;

  constructor(private activatedRoute: ActivatedRoute, private modulesApi: ModulesApi, private auth: AuthService) {
    this.auth.getCurrentLoggedInUser().subscribe((user) => {
      this.user = user;
      this.activatedRoute.params.subscribe((params: Params) => {
        this.moduleCode = params['moduleCode'];
        this.getModule();
      });
    });

  }

  getModule() {
    this.modulesApi.getModule(this.moduleCode).subscribe((mod) => {
      var year = new Date().getFullYear();
      this.module = mod;
      this.assessments = this.module.assessments['Y' + year];
    });
  }

  getMark(assessmentId) {
    var assessment = _.findWhere(this.assessments, {_id: assessmentId});
    var mark = _.findWhere(assessment.marks, { username: this.user.username});
    return mark ? mark.mark : null;
  }

  ngOnInit() {
  }

}
