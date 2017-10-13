import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth-service/auth.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-password-reset-token',
  templateUrl: './password-reset-token.component.html',
  styleUrls: ['./password-reset-token.component.scss']
})
export class PasswordResetTokenComponent implements OnInit {

  constructor(private authService : AuthService,private activatedRoute: ActivatedRoute, private router: Router) { }
  password: string;
  token: string;
  ngOnInit() {
  }

  resetPassword($event)
  {
    $event.stopPropagation();
    this.activatedRoute.params.subscribe((params: Params) => {
      this.token = params['token'];
      this.authService.resetPassword(this.token,this.password).subscribe((message) => {
        alert(message);
        this.router.navigate(['/login']);
      });

    });
  }

}
