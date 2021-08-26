import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

// Services
import { NotificationService } from 'src/app/shared/notification.service';
import { ChatroomService } from '../chatroom.service';
import { AuthService } from 'src/app/auth/auth.service';

// Interfaces
import { IChatroom } from 'src/app/shared/interfaces/chatroom';

@Component({
  selector: 'app-chatroom-create',
  templateUrl: './chatroom-create.component.html',
  styleUrls: ['./chatroom-create.component.scss']
})
export class ChatroomCreateComponent implements OnInit {
  chatroom: IChatroom | undefined

  constructor(
    private notificationService: NotificationService,
    private chatroomService: ChatroomService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.chatroom = undefined;

    this.route.params
      .subscribe(params => {
        this.chatroomService.getChatroomById(params.id).subscribe(chatroom => {
          this.chatroom = chatroom;
        }, error => {
          console.log(error);
        })
      });
  }

  createChatroom(form :NgForm) {
    const {name, description, image} = form.value;
    const user = this.authService.getUser();
    const creator = user?._id;

    if (!this.chatroom) {
      this.chatroomService.createChatroom(name, description, image, creator).subscribe(() => {
        this.notificationService.setNotification({
          message: `${name} was created successfully`,
          type: "success"
        });
  
        this.router.navigate(['/']);
      }, error => {
        this.notificationService.setNotification({
          message: error.error.error_message,
          type: "error"
        });
      });

    } else {
      this.chatroomService.updateChatroom(name, description, image, this.chatroom._id).subscribe(() => {
        this.notificationService.setNotification({
          message: `${name} was created successfully`,
          type: "success"
        });
  
        this.router.navigate(['/']);
      }, error => {
        this.notificationService.setNotification({
          message: error.error.error_message,
          type: "error"
        });
      });
    }
  }
}
