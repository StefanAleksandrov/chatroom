import { Injectable } from '@angular/core';
import { IUser } from '../common/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: IUser | undefined;

  constructor() { }

  login(email: string, password: string) :IUser {
    return this.user = {
      email,
      username: "John Doe"
    }
  }

  logout() :void {
    this.user = undefined;
  }

  isLogged() :boolean {
    return !!this.user;
  }
}
