import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Interfaces
import { IChatroom } from '../shared/interfaces/chatroom';

// Services
import { AuthService } from '../auth/auth.service';

// Environment const
import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ChatroomService {
  chatroom: IChatroom | undefined;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  createChatroom(name: string, description: string, image: string, creator: string | undefined) {
    const user = this.authService.getUser();
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: `Bearer ${user}`
      })
    };

    return this.http.post<any>(`${API_URL}/api/chatrooms/create`, {name, description, image, creator}, httpOptions);
  }
}
