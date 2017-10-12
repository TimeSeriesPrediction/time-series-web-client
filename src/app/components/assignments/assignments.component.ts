
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
  public module = [1,2,3,4];
  constructor(private authService : AuthService, private assessmentService : AssessmentsApi)
  {

  }
  ngOnInit()
  {
    this.getCurrentUser();
  }


  }
  setradio(e: string): void
  {
	this.newAssignment.type=e;
  }

newAssignment : Assessment = new Assessment();
addAssignment()
{
  this.assessmentService.addAssessment(this.newAssignment.moduleCode,2017,this.newAssignment);
}

}

