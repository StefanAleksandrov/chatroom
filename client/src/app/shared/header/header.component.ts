import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { IUser } from '../interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: IUser | undefined;

  get isLogged(): boolean {
    return this.authService.isLogged();
  }

  get userDetails(): IUser | undefined {
    return this.authService.getUser();
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  logout() :void {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
