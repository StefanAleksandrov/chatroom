import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { IUser } from 'src/app/shared/interfaces';
import { IChatroom } from 'src/app/shared/interfaces/chatroom';
import { NotificationService } from 'src/app/shared/notification.service';
import { ChatroomService } from '../chatroom.service';

@Component({
  selector: 'app-chatroom-card',
  templateUrl: './chatroom-card.component.html',
  styleUrls: ['./chatroom-card.component.scss']
})
export class ChatroomCardComponent implements OnInit {
  @Input() chatroom:IChatroom | undefined = undefined;

  user: IUser | undefined

  constructor(
    private authService: AuthService,
    private chatroomService: ChatroomService,
    private notificationService: NotificationService
  ) {
    this.user = undefined;
  }

  ngOnInit(): void {
    this.user = this.authService.getUser();
  }

  prepareData():object{
    return {
      user_id: this.user!._id,
      chatroom_id: this.chatroom!._id
    }
  }

  editChatroom(){
    console.log(this.prepareData());

  }

  deleteChatroom(){
    if (confirm("Are you sure you want to delete this chatroom?")){
      this.chatroomService.deleteChatroom(this.chatroom!._id);
    }
  }

  joinChatroom(){
    this.chatroomService.joinChatroom(this.prepareData()).subscribe(() => {
      this.chatroom?.members.push(this.user!._id);
      this.notificationService.setNotification({message: "You joined the chatroom", type: "success"})
    });
  }

  leaveChatroom(){
    this.chatroomService.leaveChatroom(this.prepareData()).subscribe(() => {
      const index = Number(this.chatroom?.members.indexOf(this.user!._id));
      this.chatroom?.members.splice(index, 1);
      this.notificationService.setNotification({message: "You left the chatroom", type: "success"})
    });
  }
}
