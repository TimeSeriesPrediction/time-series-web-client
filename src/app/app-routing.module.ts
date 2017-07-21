import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GradingComponent } from './grading/grading.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AuthGuard } from './auth.guard';
import { WeightingsComponent } from './weightings/weightings.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'dash',
    pathMatch: 'full'
  },
  {
    path: 'dash',
    component: DashboardComponent,
    canActivate: [AuthGuard] 
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
