import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Socket io
import { io } from 'socket.io-client';

// Environment const
import { environment } from '../../environments/environment';
import { IMessage } from '../shared/interfaces/message';
const API_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket: any;
  isConnected: boolean;
  readonly uri: string;

  constructor() {
    this.uri = API_URL;
    this.isConnected = false;
  }

  connect(){
    // We connect to the server only once
    if (!this.isConnected) {
      this.socket = io(this.uri);
      this.isConnected = true;
    }
  }

  listen(eventName: string): Observable<any>{
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data: any) => {
        subscriber.next(data);
      });
    });
  }

  emit(eventName: string, message: IMessage | undefined, room: string): void{
    this.socket.emit(eventName, message, room);
  }
}
