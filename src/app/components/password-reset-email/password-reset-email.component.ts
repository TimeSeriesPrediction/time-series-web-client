import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth-service/auth.service';
@Component({
  selector: 'app-password-reset-email',
  templateUrl: './password-reset-email.component.html',
  styleUrls: ['./password-reset-email.component.scss']
})
export class PasswordResetEmailComponent implements OnInit {


  userEmail : string ;
  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  getEmail()
  {
    this.authService.requestPasswordReset(this.userEmail);
  }

}
