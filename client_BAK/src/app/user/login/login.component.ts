import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  login(email: string, password: string): void {
    const user = this.userService.login(email, password)
    console.log(user);
    this.router.navigate(['/']);
  }
}