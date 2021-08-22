import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  register(form: NgForm): void {
    const {email, password, "repeat-password": repeatPassword} = form.value;

    if (!/^\S+@\S+\.\S+$/.test(email)) return;

    if (password != repeatPassword) {
      return; // Maybe add notification?

    } else {
      this.authService.register(email, password, repeatPassword).subscribe(user => {
        this.router.navigate(['/login']);
      });
    }
  }
}
