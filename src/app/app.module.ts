import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdInputModule, MdButtonModule,MdNativeDateModule, MdCheckboxModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppConfig } from './app.config';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthGuard } from './services/auth-guard/auth.guard';
import { AuthService } from './services/auth-service/auth.service';
import { GradingComponent } from './components/grading/grading.component';
import { AssignmentsComponent } from './components/assignments/assignments.component';
import { WeightingsComponent } from './components/weightings/weightings.component';
import {ApiService} from './services/api-service/api.service';
import {LeaderboardComponent} from './components/leaderboard/leaderboard.component';
import {AssessmentsApi} from './services/api-service/assessments-api/assessments-api.service';
import {ModulesApi} from './services/api-service/modules-api/modules-api.service';
import { MarksApi } from './services/api-service/marks-api/marks-api.service';
import {UsersApi} from './services/api-service/users-api/users-api.service';
import 'hammerjs';
import { MarksComponent } from './components/marks/marks.component';
import { AdminMarksInterfaceComponent } from './components/admin-marks-interface/admin-marks-interface.component';
//import {StudentQueryComponent} from './student-query/student-query.component';
import {RedComponentComponent} from "./components/red-component/red-component.component";
import { ChartsModule } from 'ng2-charts';
import { StudentQueryComponent } from './components/student-query/student-query.component';
import { AdminQueryComponent } from './components/admin-query/admin-query.component';
import { StudentDashComponent } from './components/student-dash/student-dash.component';
import { AddBulkUsersComponent } from './components/add-bulk-users/add-bulk-users.component';
import { AuthorisationService } from './services/authorisation-service/authorisation.service';
import { EnrollStudentsComponent } from './components/enroll-students/enroll-students.component';
import { MyMarksComponent } from './components/my-marks/my-marks.component';
import { PasswordResetEmailComponent } from './components/password-reset-email/password-reset-email.component';
import { PasswordResetTokenComponent } from './components/password-reset-token/password-reset-token.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
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
    StudentQueryComponent,
    StudentDashComponent,
    AddBulkUsersComponent,
    EnrollStudentsComponent,
    MyMarksComponent,
    PasswordResetEmailComponent,
    PasswordResetTokenComponent
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
    ChartsModule,
    ReactiveFormsModule
  ],
  providers: [
    AppConfig,
    AuthGuard,
    ApiService,
    AuthService,
    AssessmentsApi,
    ModulesApi,
    UsersApi,
    AuthorisationService,
    MarksApi
    //UserMockServerProvider,
    //MockBackend,
    //BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
