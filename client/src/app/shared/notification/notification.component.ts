import { Component, OnInit } from '@angular/core';
import { INotification } from '../interfaces/notification';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  get notification(): INotification | undefined {
    return this.notificationService.getNotification();
  }

  constructor(
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    setTimeout((): void => {
      this.notificationService.setNotification({
        message: "Hello world!",
        type: 'success'
      });
    }, 1000);
  }

  hideMessage(): void {}
}
