import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentQueryComponent} from './student-query/student-query.component';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
<<<<<<< Updated upstream
    redirectTo: 'dash',
    pathMatch: 'full'
  },
  {
    path: 'dash',
    component: DashboardComponent,
    canActivate: [AuthGuard] 
=======
    children: []
  },
  {
    path: 'student-query',
    component: StudentQueryComponent
>>>>>>> Stashed changes
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
