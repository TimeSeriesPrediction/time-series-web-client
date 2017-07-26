import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';

//import { UserMockServerProvider } from './users.mockserver';
//import { MockBackend, MockConnection } from '@angular/http/testing';
//import { BaseRequestOptions } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdInputModule, MdButtonModule, MdCheckboxModule,MdNativeDateModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppConfig } from './app.config'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { GradingComponent } from './grading/grading.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { WeightingsComponent } from './weightings/weightings.component';
import {MaterialModule} from '@angular/material';
import {ApiService} from './service/api-service/api.service';
import {LeaderboardComponent} from './leaderboard/leaderboard/component';
import {AssessmentsApi} from './services/api-service/assessments-api/assessments.api';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    GradingComponent,
    AssignmentsComponent,
    WeightingsComponent,
    LeaderboardComponent
  ],
  imports: [
  
    MdNativeDateModule,
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
    MaterialModule
  ],
  providers: [
    AppConfig,
    AuthGuard,
    ApiService,
    AuthService,
    AssessmentsApi
    //UserMockServerProvider,
    //MockBackend,
    //BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
