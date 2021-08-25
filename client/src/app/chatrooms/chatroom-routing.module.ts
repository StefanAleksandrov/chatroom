import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../shared/guards/auth.activate';

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
                component: ChatroomListComponent,
                canActivate: [AuthActivate],
                data: {
                    authenticationRequired: true,
                    authenticationFailureRedirectUrl: '/login'
                }
            },
            {
                path: 'add',
                pathMatch: 'full',
                component: ChatroomCreateComponent,
                canActivate: [AuthActivate],
                data: {
                    authenticationRequired: true,
                    authenticationFailureRedirectUrl: '/login'
                }
            },
            {
                path: ':id',
                pathMatch: 'full',
                component: ChatroomCreateComponent,
                canActivate: [AuthActivate],
                data: {
                    authenticationRequired: true,
                    authenticationFailureRedirectUrl: '/login'
                }
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatroomRoutingModule { }
