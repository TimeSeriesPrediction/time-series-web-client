import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminQueryComponent } from './admin-query/admin-query.component';
const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'admin-query',
    component: AdminQueryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
