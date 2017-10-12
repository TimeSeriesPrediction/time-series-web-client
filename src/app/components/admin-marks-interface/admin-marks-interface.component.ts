import { Component } from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AssessmentsApi } from '../../services/api-service/assessments-api/assessments-api.service';
import { Assessment } from '../../models/Assessment';
import { NgFor } from '@angular/common';
import {MdButtonModule} from '@angular/material';
import { _ } from 'underscore';
import {User} from '../../models/user-models/User';
import { ModulesApi } from '../../services/api-service/modules-api/modules-api.service';


@Component({
  selector: 'app-admin-marks-interface',
  templateUrl: './admin-marks-interface.component.html',
  styleUrls: ['./admin-marks-interface.component.scss']
})
export class AdminMarksInterfaceComponent {

  moduleCode: String;
  assessments: Assessment[];
  students: User[];
  chosenAssessment: Assessment;
  searchText: String;
  filteredStudents: User[];

  constructor(private activatedRoute: ActivatedRoute, private assessmentsApi: AssessmentsApi, private modulesApi: ModulesApi) {
   this.activatedRoute.params.subscribe((params: Params) => {
        this.moduleCode = params['moduleCode'];
        this.getAssignments();
        this.getStudents();
      });
  }

  getAssignments() {
    var year = new Date().getFullYear();
    this.assessmentsApi.getAssessmentsByModule(this.moduleCode, year).subscribe((assessments) => {
      this.assessments = assessments;
    });
  };

  getStudents() {
    var year = new Date().getFullYear();
    this.modulesApi.getStudentsByModule(this.moduleCode, year).subscribe((students) => {
      this.students = students;
      this.filteredStudents = students;
    });
  }

  editAssignmentMarks(id) {
    this.chosenAssessment = _.findWhere(this.assessments, { _id: id});
  };

  saveMarks() {

  };

  cancelEdit() {
    this.chosenAssessment = null;
    this.searchText = '';
  };

  search() {
    this.filteredStudents = _.filter(this.students, (student) => {
      return student.username.includes(this.searchText);
    });
  }
}

