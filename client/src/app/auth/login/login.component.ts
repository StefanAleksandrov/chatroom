import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(event: Event) :void {
    event.preventDefault();
    console.log("THIS IS LOGIN");
  }

  loginASD(event: Event, email: string, password: string): void {
    event.preventDefault();
    console.log(email, password);

    const user = this.authService.login(email, password);
    this.router.navigate(['/']);
  }
}
