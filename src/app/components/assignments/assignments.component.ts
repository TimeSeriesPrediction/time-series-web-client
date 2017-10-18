
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  forwardRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import * as moment from 'moment';
import {AssessmentsApi} from '../../services/api-service/assessments-api/assessments-api.service';
import {User} from '../../models/user-models/User';
import {Assessment} from '../../models/Assessment';
import {Injectable} from '@angular/core';
import {ApiService} from '../../services/api-service/api.service';
import { HttpModule } from '@angular/http';
import { AppConfig } from '../../app.config';
import { AuthService} from '../../services/auth-service/auth.service';
import { NgFor } from '@angular/common';
import { NgIf} from '@angular/common';
import { MdRadioButton} from '@angular/material';
import {NgModule} from '@angular/core';
import { ModulesApi} from '../../services/api-service/modules-api/modules-api.service';
import { Module } from '../../models/Module';
import {MdSnackBar,MdSnackBarModule} from '@angular/material';

const Moment: any = (<any>moment).default || moment;

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  providers: [ApiService,AppConfig,AssessmentsApi],
  styleUrls: ['./assignments.component.scss'],
})

export class AssignmentsComponent {

  private onTouchedCallback: () => void = () => { };
  private onChangeCallback: (_: any) => void = () => { };
  public currentUser : User = new User();
  public modules :Module[];
  constructor(private authService : AuthService, private assessmentService : AssessmentsApi, private modulesApi: ModulesApi,private snackBar: MdSnackBar)
  {

  }
  ngOnInit()
  {
    this.getModules();
  }



  setradio(e: string)
  {
	  this.newAssignment.type= e;
  }

  getModules() {
    this.modulesApi.getAllModules().subscribe((mods) => {
      this.modules = mods;
    });
  }

  newAssignment : Assessment = new Assessment();
  addAssignment()
  {
    var year = new Date().getFullYear();
    this.assessmentService.addAssessment(this.newAssignment.moduleCode,year,this.newAssignment).subscribe((message) => {
      this.snackBar.open("Success: " + message + " !", 'OK', {
        duration: 4000,
      });
    });
  }

}

