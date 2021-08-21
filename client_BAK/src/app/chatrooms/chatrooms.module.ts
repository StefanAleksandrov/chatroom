import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatroomListComponent } from './chatroom-list/chatroom-list.component';
import { ChatroomDetailsComponent } from './chatroom-details/chatroom-details.component';
import { ChatroomRoutingModule } from './chatroom-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';



@NgModule({
  declarations: [
    ChatroomListComponent,
    ChatroomDetailsComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    ChatroomRoutingModule
  ]
})
export class ChatroomsModule { }
