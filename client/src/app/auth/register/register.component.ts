import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

// Services
import { AuthService } from '../auth.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private notificationService: NotificationService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  register(form: NgForm): void {
    const {email, password, "repeat-password": repeatPassword} = form.value;

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      this.notificationService.setNotification({
        message: "Please provide a valid email",
        type: "error"
      })
      return;
    }

    if (password != repeatPassword) {
      this.notificationService.setNotification({
        message: "Passwords should match",
        type: "error"
      })

      return;

    } else {
      this.authService.register(email, password, repeatPassword).subscribe(() => {
        this.notificationService.setNotification({
          message: "Successful registration",
          type: "success"
        })

        this.router.navigate(['/login']);
      }, error => {
        this.notificationService.setNotification({
          message: error.error.error_message,
          type: "error"
        });
      });
    }
  }
}
