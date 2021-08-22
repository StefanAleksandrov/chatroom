import { Component, OnInit } from '@angular/core';
import { INotification } from '../interfaces/notification';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {

  get notification(): INotification | undefined {
    return this.notificationService.getNotification();
  }

  constructor(
    private notificationService: NotificationService
  ) {}

  hideMessage(): void {
    this.notificationService.removeNotification();
  }
}
