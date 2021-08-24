import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

// Interfaces
import { IUser } from '../shared/interfaces';

// Local Storage
import { LocalStorage } from '../shared/injection-tokens';

// Environment const
import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: IUser | undefined;
  token: string | undefined;

  constructor(
    private http: HttpClient,
    @Inject(LocalStorage) private localStorage: Window['localStorage']
  ) {
    // When created check if we have <USER> in the localStorage and if so, set the logged in user
    const loggedUser = this.localStorage.getItem('<USER>');
    const token = this.localStorage.getItem('<TOKEN>');

    if (loggedUser) {
      this.user = JSON.parse(loggedUser);
    }

    if (token) {
      this.token = token;
    }
  }

  login(email: string, password: string) {
    return this.http.post<any>(`${API_URL}/auth/login`, {email, password}, { withCredentials: true });
  }

  register(email: string, password: string, repeatPassword: string) {
    return this.http.post<any>(`${API_URL}/auth/register`, {email, password, repeatPassword});
  }

  logout() {
    this.user = undefined;
    this.localStorage.removeItem('<USER>');
    this.localStorage.removeItem('<TOKEN>');
    return this.http.post<any>(`${API_URL}/auth/logout`, {});
  }

  setUser(user: IUser, token: string): void {
    this.user = user;
    this.localStorage.setItem('<USER>', JSON.stringify(user));
    this.localStorage.setItem('<TOKEN>', token);
  }

  getUser() :IUser | undefined {
    return this.user;
  }

  isLogged() :boolean {
    return !!this.user;
  }
}
