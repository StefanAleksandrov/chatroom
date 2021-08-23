import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { IChatroom } from 'src/app/shared/interfaces/chatroom';
import { ChatroomService } from '../chatroom.service';

@Component({
  selector: 'app-chatroom-list',
  templateUrl: './chatroom-list.component.html',
  styleUrls: ['./chatroom-list.component.scss']
})
export class ChatroomListComponent implements OnInit {
  chatrooms : IChatroom[] | undefined;
  activeChat : string | undefined;

  constructor(
    private router: Router,
    private chatroomService: ChatroomService,
    private authService: AuthService
  ) {
    this.chatrooms = undefined;
    this.activeChat = undefined;
  }

  ngOnInit(): void {
    this.getMyChatrooms();
  }

  activateChat(id: string) {
    if (id == this.activeChat) this.activeChat = undefined;
    else this.activeChat = id;
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
}
