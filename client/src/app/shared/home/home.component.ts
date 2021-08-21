import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLogged: boolean;

  constructor(
    private router: Router
  ) {
    this.isLogged = false;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLogged = true;
    }, 2500)
  }

  goToRegister() {
    return this.router.navigate(['/register']);
  }

  goToLogin() {
    return this.router.navigate(['/login']);
  }
}
