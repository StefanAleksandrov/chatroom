import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Routing module
import { ChatroomRoutingModule } from './chatroom-routing.module';

// Components
import { ChatroomListComponent } from './chatroom-list/chatroom-list.component';
import { ChatroomDetailsComponent } from './chatroom-details/chatroom-details.component';
import { ChatroomCardComponent } from './chatroom-card/chatroom-card.component';
import { ChatroomCreateComponent } from './chatroom-create/chatroom-create.component';
import { ChatroomMessageComponent } from './chatroom-message/chatroom-message.component';

@NgModule({
  declarations: [
    ChatroomListComponent,
    ChatroomDetailsComponent,
    ChatroomCardComponent,
    ChatroomCreateComponent,
    ChatroomMessageComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ChatroomRoutingModule
  ],
  exports: [
    ChatroomCardComponent
  ]
})
export class ChatroomsModule { }
