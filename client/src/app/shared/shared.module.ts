import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutUsComponent } from './about-us/about-us.component';
import { CustomCursorComponent } from './custom-cursor/custom-cursor.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotificationComponent } from './notification/notification.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LocalStorage } from './injection-tokens';
import { ChatroomsModule } from '../chatrooms/chatrooms.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AboutUsComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NotificationComponent,
    PageNotFoundComponent,
    CustomCursorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ChatroomsModule
  ],
  exports: [
    CustomCursorComponent,
    FooterComponent,
    HeaderComponent,
    NotificationComponent,
  ],
  providers: [
    {
      provide: LocalStorage,
      useValue: window.localStorage
    }
  ]
})
export class SharedModule { }
