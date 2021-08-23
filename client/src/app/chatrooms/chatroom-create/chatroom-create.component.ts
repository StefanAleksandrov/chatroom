import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

// Services
import { NotificationService } from 'src/app/shared/notification.service';
import { ChatroomService } from '../chatroom.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-chatroom-create',
  templateUrl: './chatroom-create.component.html',
  styleUrls: ['./chatroom-create.component.scss']
})
export class ChatroomCreateComponent implements OnInit {

  constructor(
    private notificationService: NotificationService,
    private chatroomService: ChatroomService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createChatroom(form :NgForm) {
    const {name, description, image} = form.value;
    const user = this.authService.getUser();
    const creator = user?._id;

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
    
  }
}
