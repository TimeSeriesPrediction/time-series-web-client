import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth-service/auth.service';
import {NgModule} from "@angular/core";
import {MdSnackBar,MdSnackBarModule} from '@angular/material';
@Component({
  selector: 'app-password-reset-email',
  templateUrl: './password-reset-email.component.html',
  styleUrls: ['./password-reset-email.component.scss']
})
export class PasswordResetEmailComponent implements OnInit {


  userEmail : string ;
  constructor(private authService : AuthService,private snackBar: MdSnackBar) { }

  ngOnInit() {
  }

  getEmail($event)
  {
    $event.stopPropagation();
    this.authService.requestPasswordReset(this.userEmail).subscribe((message) => {
      this.snackBar.open("Success: " + message +"!", 'OK', {
        duration: 4000,
      });
    });
  }

}
