import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  login(form: NgForm) :void {
    const {email, password} = form.value;

    this.authService.login(email, password) .subscribe(data => {
      this.authService.setUser(data.user, data.token);
      this.router.navigate(['/']);
    }, error => console.log("There was an error:", error));
  }
}
