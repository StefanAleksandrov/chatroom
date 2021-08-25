import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ChatroomCreateComponent } from './chatroom-create/chatroom-create.component';
import { ChatroomListComponent } from './chatroom-list/chatroom-list.component';

const routes: Routes = [
    {
        path: 'chatrooms',
        children:[
            {
                path: '',
                pathMatch: 'full',
                component: ChatroomListComponent
            },
            {
                path: 'add',
                pathMatch: 'full',
                component: ChatroomCreateComponent
            },
            {
                path: ':id',
                pathMatch: 'full',
                component: ChatroomCreateComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatroomRoutingModule { }
