
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import {WeightingsComponent} from './components/weightings/weightings.component';
import {GradingComponent} from './components/grading/grading.component';
import {AssignmentsComponent} from './components/assignments/assignments.component';


import { AdminMarksInterfaceComponent } from './components/admin-marks-interface/admin-marks-interface.component';



import { StudentQueryComponent} from './components/student-query/student-query.component';

import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { MarksComponent } from './components/marks/marks.component';
import { StudentDashComponent} from './components/student-dash/student-dash.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { AuthGuard } from './services/auth-guard/auth.guard';
import { AdminQueryComponent } from './components/admin-query/admin-query.component';
import { RedComponentComponent } from './components/red-component/red-component.component';
import {AddBulkUsersComponent } from './components/add-bulk-users/add-bulk-users.component';
import { EnrollStudentsComponent } from './components/enroll-students/enroll-students.component';
import { StaffToModuleComponent } from './components/staff-to-module/staff-to-module.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'marks',
    component: MarksComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'dash',
    component: DashboardComponent
  },
  {
    path: 'Grading',
    component: GradingComponent
  },
  {
    path:'Assignment',
    component: AssignmentsComponent
  },
  {
    path:'Weights',
    component: WeightingsComponent

  },
  {
    path: 'leaderboard',
    component: LeaderboardComponent
  },
  {
    path: 'admin-marks/:moduleCode',
    component: AdminMarksInterfaceComponent
  },
  {
    path: 'marks',
    component: MarksComponent
  },
  {
    path: 'student-query',
    component: StudentQueryComponent
  },
  {
    path: 'admin-query',
    component: AdminQueryComponent
  },
  {
    path: 'red',
    component: RedComponentComponent
  },
  {
    path: 'student-dash',
    component: StudentDashComponent
  },
  {
    path: 'add-bulk-users',
    component: AddBulkUsersComponent
  },
  {
    path: 'enroll-students',
    component: EnrollStudentsComponent
  },
  {
    path: 'staff-to-module',
    component: StaffToModuleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
