import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdInputModule, MdButtonModule,MdNativeDateModule, MdCheckboxModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppConfig } from './app.config';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './services/auth-guard/auth.guard';
import { AuthService } from './services/auth-service/auth.service';

import { GradingComponent } from './grading/grading.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { WeightingsComponent } from './weightings/weightings.component';
import {MaterialModule} from '@angular/material';
import {ApiService} from './services/api-service/api.service';
import {LeaderboardComponent} from './leaderboard/leaderboard.component';
import {AssessmentsApi} from './services/api-service/assessments-api/assessments-api.service';
import {UsersApi} from './services/api-service/users-api/users-api';
import 'hammerjs';
import { MarksComponent } from './marks/marks.component';
import { AdminMarksInterfaceComponent } from './admin-marks-interface/admin-marks-interface.component';
//import {StudentQueryComponent} from './student-query/student-query.component';
import {RedComponentComponent} from "./red-component/red-component.component";
import {AgGridModule} from "ag-grid-angular/main";


import { StudentQueryComponent } from './student-query/student-query.component';
import { AdminQueryComponent } from './admin-query/admin-query.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminQueryComponent,
    LoginComponent,
    DashboardComponent,
    GradingComponent,
    AssignmentsComponent,
    WeightingsComponent,
    MarksComponent,
    LeaderboardComponent,

    AdminMarksInterfaceComponent,
   
    RedComponentComponent,

    StudentQueryComponent


  ],
  imports: [
    MdNativeDateModule,
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    HttpModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdButtonModule,
    MdCheckboxModule,
    AppRoutingModule,

    MaterialModule,
    AgGridModule.withComponents(
      [RedComponentComponent]
  ),

    ReactiveFormsModule

  ],
  providers: [
    AppConfig,
    AuthGuard,
    ApiService,
    AuthService,
    AssessmentsApi,
    UsersApi
    //UserMockServerProvider,
    //MockBackend,
    //BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
