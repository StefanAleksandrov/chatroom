import { Injectable } from '@angular/core';

// Interfaces
import { INotification } from './interfaces/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notification: INotification | undefined;

  constructor() { }

  getNotification() :INotification | undefined {
    return this.notification;
  }

  setNotification(payload: INotification) :void {
    this.notification = payload;

    setTimeout((): void => {
      this.removeNotification();
    }, 3000);
  }

  removeNotification() :void {
    this.notification = undefined;
  }
}
