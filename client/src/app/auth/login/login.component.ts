import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

// Services
import { AuthService } from '../auth.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private notificationService: NotificationService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(form: NgForm) :void {
    const {email, password} = form.value;

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      this.notificationService.setNotification({
        message: "Please provide a valid email",
        type: "error"
      })
      return;
    }

    this.authService.login(email, password) .subscribe(data => {
      this.authService.setUser(data.user, data.token);

      this.notificationService.setNotification({
        message: "Successful login, enjoy chatting!",
        type: "success"
      });

      this.router.navigate(['/']);
    }, error => {
      this.notificationService.setNotification({
        message: error.error.error_message,
        type: "error"
      });
    });
  }
}
