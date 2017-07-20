import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { AuthService } from '../services/auth-service/auth.service';
import { AssessmentsApi } from '../services/api-service/assessments-api/assessments.api.mock';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private assessments : AssessmentsApi) { }

  ngOnInit() {
    this.assessments.getAssessmentsByModule(1).subscribe((response) => {
      console.log("Reached here: ", response);
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
