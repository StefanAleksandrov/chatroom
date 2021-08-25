import { Component, OnInit } from '@angular/core';

// Interfaces
import { IUser } from 'src/app/shared/interfaces';
import { IChatroom } from 'src/app/shared/interfaces/chatroom';

// Services
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  chatroom: IChatroom | undefined;

  get user() :IUser | undefined {
    return this.authService.getUser();
  }

  get createdChatrooms(): IChatroom[]{
    return this.user!.chatrooms.filter(chatroom => {
      return this.user!._id == chatroom.creator;
    })
  }

  get joinedChatrooms(): IChatroom[]{
    return this.user!.chatrooms.filter(chatroom => {
      return chatroom.members.includes(this.user!._id) && this.user!._id != chatroom.creator;
    });
  }

  constructor(
    private authService: AuthService
  ) {
    this.chatroom = undefined;
  }

  ngOnInit(): void {}
}
