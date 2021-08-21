import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ChatroomDetailsComponent } from './chatroom-details/chatroom-details.component';
import { ChatroomListComponent } from './chatroom-list/chatroom-list.component';

const routes: Routes = [
    {
        path: 'about-us',
        component: AboutUsComponent
    },
    {
        path: 'chatrooms',
        children:[
            {
                path: '',
                pathMatch: 'full',
                component: ChatroomListComponent
            },
            {
                path: ':id',
                component: ChatroomDetailsComponent
            }
        ] 
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatroomRoutingModule { }
