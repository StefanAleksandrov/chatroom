import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
  public message: string = 'Hello World!';
  public message_type: string = 'notification';

  // constructor(msg: string, msg_type: string) {
  //   this.message = msg;
  //   this.message_type = msg_type;
  // }

  constructor() {}

  hideMessage(): void {
    this.message_type = "hide";
  }

}
