import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MarksComponent } from './marks/marks.component';

import { LeaderboardComponent } from './leaderboard/leaderboard.component';

import { AuthGuard } from './services/auth-guard/auth.guard';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'dash',
    component: DashboardComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'leaderboard',
    component: LeaderboardComponent
  },
  {
    path: 'marks',
    component: MarksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
