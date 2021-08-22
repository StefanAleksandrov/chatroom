import { Component, Input, OnInit } from '@angular/core';
import { IChatroom } from 'src/app/shared/interfaces/chatroom';

@Component({
  selector: 'app-chatroom-card',
  templateUrl: './chatroom-card.component.html',
  styleUrls: ['./chatroom-card.component.scss']
})
export class ChatroomCardComponent implements OnInit {
  @Input() chatroom:IChatroom | undefined = undefined;

  constructor() { }

  ngOnInit(): void {
    console.log(this.chatroom);
    
  }

}
