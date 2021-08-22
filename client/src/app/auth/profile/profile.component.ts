import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  get user() :IUser | undefined {
    return this.authService.getUser();
  }

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
