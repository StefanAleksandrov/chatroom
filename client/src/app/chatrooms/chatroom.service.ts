import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Interfaces
import { IChatroom } from '../shared/interfaces/chatroom';

// Services
import { AuthService } from '../auth/auth.service';

// Environment const
import { environment } from '../../environments/environment';
import { IUser } from '../shared/interfaces';
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
        Authorization: `Bearer ${JSON.stringify(user!._id)}`
      })
    };

    return this.http.post<any>(`${API_URL}/api/chatrooms/create`, {name, description, image, creator}, httpOptions);
  }

  getChatrooms(searchString: string = ""){
    const criteria = encodeURI(searchString);
    
    return this.http.get<any>(`${API_URL}/api/chatrooms/?criteria=${criteria}`);
  }
}
