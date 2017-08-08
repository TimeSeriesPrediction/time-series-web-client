import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import {WeightingsComponent} from './weightings/weightings.component';
import {GradingComponent} from './grading/grading.component';
import {AssignmentsComponent} from './assignments/assignments.component';
import { AuthGuard } from './services/auth-guard/auth.guard';
import { MarksComponent } from './marks/marks.component';
//import {StudentQueryComponent} from './student-query/student-query.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'marks',
    component: MarksComponent
  },
 //// {
   // path: 'queries',
   // component: MarksComponent
  //},
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
