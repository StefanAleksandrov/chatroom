import { Component, Input, OnInit } from '@angular/core';
import { IMessage } from 'src/app/shared/interfaces/message';

@Component({
  selector: 'app-chatroom-message',
  templateUrl: './chatroom-message.component.html',
  styleUrls: ['./chatroom-message.component.scss']
})
export class ChatroomMessageComponent implements OnInit {
  @Input() message: IMessage | undefined = undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
