import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing module
import { ChatroomRoutingModule } from './chatroom-routing.module';

// Components
import { ChatroomListComponent } from './chatroom-list/chatroom-list.component';
import { ChatroomDetailsComponent } from './chatroom-details/chatroom-details.component';



@NgModule({
  declarations: [
    ChatroomListComponent,
    ChatroomDetailsComponent
  ],
  imports: [
    CommonModule,
    ChatroomRoutingModule
  ]
})
export class ChatroomsModule { }
