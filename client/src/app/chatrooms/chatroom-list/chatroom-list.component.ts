import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

// Interfaces
import { IChatroom } from 'src/app/shared/interfaces/chatroom';

// Services
import { AuthService } from 'src/app/auth/auth.service';
import { ChatroomService } from '../chatroom.service';
import { SocketService } from '../socket.service';

// Interfaces
import { IMessage } from 'src/app/shared/interfaces/message';

@Component({
  selector: 'app-chatroom-list',
  templateUrl: './chatroom-list.component.html',
  styleUrls: ['./chatroom-list.component.scss']
})
export class ChatroomListComponent implements OnInit {
  chatrooms : IChatroom[] | undefined;
  activeChat : string | undefined;
  messages : IMessage[] | undefined;
  isSubscribed : boolean;

  constructor(
    private chatroomService: ChatroomService,
    private socketService: SocketService,
    private authService: AuthService,
    private router: Router,
  ) {
    this.chatrooms = undefined;
    this.activeChat = undefined;
    this.messages = undefined;
    this.isSubscribed = false;
  }

  ngOnInit(): void {
    this.getMyChatrooms();
  }

  activateChat(id: string) {
    if (id == this.activeChat){
      this.activeChat = undefined;

    } else {
      // If we switch rooms, we leave the old room
      if (this.activeChat) this.socketService.emit('leave-room', undefined, this.activeChat);

      this.chatroomService.getMessagesPerChatroom(id).subscribe((messages) => {
        this.messages = messages.map((message: IMessage): IMessage => {
          if (message.author._id == this.authService.getUser()!._id) message.author = "Me";

          return message;
        });

        // We subscribe only once and only after we receive all the messages
        if (!this.isSubscribed){
          this.socketService.listen('broadcast-message').subscribe((data: IMessage) => {
            if (this.messages) this.messages.push(data);
            else this.messages = [data];
          });
  
          this.isSubscribed = true;
        }
      });

      this.activeChat = id;
      this.socketService.connect();
      this.socketService.emit('join-room', undefined, this.activeChat);
    }
  }

  createNewChatroom() {
    this.router.navigate(['chatrooms/add']);
  }

  getMyChatrooms(): void {
    this.chatroomService.getChatrooms().subscribe(data => {
      const user = this.authService.getUser();
      this.chatrooms = data.chatrooms.filter((el: { members: string | string[]; }) => {
        return el.members.includes(user!._id)
      });
    });
  }

  sendMessage(form: NgForm){
    const { message } = form.value;
    const user = this.authService.getUser();
    const author = user!._id;

    const msg: IMessage = {
      _id: '',
      content: message,
      author,
      chatroom: this.activeChat!,
      created_at: new Date().toString()
    }
    
    this.socketService.emit("send-message", msg, msg.chatroom);

    msg.author = "Me";

    // We add the message to the messages array
    if (this.messages) this.messages.push(msg);
    else this.messages = [msg];

    form.reset();
  }
}
