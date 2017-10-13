import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth-service/auth.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-password-reset-token',
  templateUrl: './password-reset-token.component.html',
  styleUrls: ['./password-reset-token.component.scss']
})
export class PasswordResetTokenComponent implements OnInit {

  constructor(private authService : AuthService,private activatedRoute: ActivatedRoute) { }
  password: string;
  token: string;
  ngOnInit() {
  }

  resetPassword()
  {
    this.activatedRoute.params.subscribe((params: Params) => {
       this.token = params['token'];
    });

    this.authService.resetPassword(this.token,this.password);
  }

}
