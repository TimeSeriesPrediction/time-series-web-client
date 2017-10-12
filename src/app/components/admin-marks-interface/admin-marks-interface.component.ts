import { Component } from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AssessmentsApi } from '../../services/api-service/assessments-api/assessments-api.service';
import { Assessment } from '../../models/Assessment';
import { NgFor } from '@angular/common';
import {MdButtonModule} from '@angular/material';
import { _ } from 'underscore';
import {User} from '../../models/user-models/User';
import { ModulesApi } from '../../services/api-service/modules-api/modules-api.service';
import {Mark} from '../../models/marks-models/Mark';
import {MarksApi} from '../../services/api-service/marks-api/marks-api.service';


@Component({
  selector: 'app-admin-marks-interface',
  templateUrl: './admin-marks-interface.component.html',
  styleUrls: ['./admin-marks-interface.component.scss']
})
export class AdminMarksInterfaceComponent {

  moduleCode: String;
  assessments: Assessment[];
  students: any[];
  chosenAssessment: Assessment;
  searchText: String;
  filteredStudents: any[];
  loading = true;

  constructor(private activatedRoute: ActivatedRoute, private assessmentsApi: AssessmentsApi, private modulesApi: ModulesApi, private marksApi: MarksApi) {
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
      this.loading = false;
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
    this.loading = true;
    this.chosenAssessment = _.findWhere(this.assessments, { _id: id});

    for(var i = 0; i < this.chosenAssessment.marks.length; i++) {
      var student = _.findWhere(this.students, { username: this.chosenAssessment.marks[i].username });

      student.mark = this.chosenAssessment.marks[i].mark;
    }

    this.loading = false;
  };

  saveMarks() {
    this.loading = true;
    var marks: Mark[] = new Array<Mark>();
    for(var i = 0; i < this.students.length; i++) {
      var student = this.students[i];
      if (student.mark) {
        marks.push(new Mark(student.username, student.mark));
      }
    }

    this.marksApi.addFinalMarksToAssessment(this.chosenAssessment._id, marks, this.moduleCode).subscribe((message) => {
      this.chosenAssessment = null;
      this.loading = false;
    });
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

