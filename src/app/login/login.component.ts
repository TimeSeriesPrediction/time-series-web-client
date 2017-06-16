import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { AuthService } from '../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {};

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model.username, this.model.password, this.model.remember)
      .subscribe(
        data => {
          this.router.navigate(['/dash']);
        },
        error => { alert(error) }
      );
  }

}