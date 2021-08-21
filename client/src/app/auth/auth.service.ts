import { Injectable } from '@angular/core';

// Interfaces
import { IUser } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: IUser | undefined;

  constructor() {
    setTimeout(() => {
      this.user = {
        email: "string",
        username: "string"
      }
    }, 1500);
  }

  login(email: string, password: string) :void {
    this.user = {
      email,
      username: "John Doe"
    }
  }

  logout() :void {
    this.user = undefined;
  }

  getUser() :IUser | undefined {
    return this.user;
  }

  isLogged() :boolean {
    return !!this.user;
  }
}
