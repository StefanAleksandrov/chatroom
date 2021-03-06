import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
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
        Authorization: `Bearer ${JSON.stringify(user!._id)}`
      })
    };

    return this.http.post<any>(`${API_URL}/api/chatrooms/create`, {name, description, image, creator}, httpOptions);
  }

  updateChatroom(name: string, description: string, image: string, chatroom_id: string){
    const user = this.authService.getUser();
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: `Bearer ${JSON.stringify(user!._id)}`
      })
    };

    return this.http.post<any>(`${API_URL}/api/chatrooms/update`, {name, description, image, chatroom_id}, httpOptions);
  }

  getChatrooms(searchString: string = ""){
    const criteria = encodeURI(searchString);
    
    return this.http.get<any>(`${API_URL}/api/chatrooms/?criteria=${criteria}`);
  }

  getChatroomById(id: string){
    const chatroom_id = encodeURI(id);
    
    return this.http.get<any>(`${API_URL}/api/chatrooms/?id=${chatroom_id}`);
  }

  getMessagesPerChatroom(id: string){
    const chatroom_id = encodeURI(id);

    return this.http.get<any>(`${API_URL}/api/messages/?id=${chatroom_id}`);
  }

  joinChatroom(payload: object){
    return this.http.post<HttpResponse<object>>(`${API_URL}/api/chatrooms/join`, payload);
  }

  leaveChatroom(payload: object){
    return this.http.post<HttpResponse<object>>(`${API_URL}/api/chatrooms/leave`, payload);
  }

  deleteChatroom(chatroom_id: string){
    const id = encodeURI(chatroom_id);
    return this.http.delete(`${API_URL}/api/chatrooms/delete/?id=${id}`);
  }
}
