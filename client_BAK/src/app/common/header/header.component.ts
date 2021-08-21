import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { IUser } from '../interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: IUser | undefined;

  get isLogged(): boolean {
    return this.userService.isLogged();
  }

  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.user = {
        email: "string",
        username: "string"
      };
    }, 2500)
  }

  logout() :void {
    this.userService.logout();
  }
}
