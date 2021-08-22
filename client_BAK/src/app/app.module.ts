import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChatroomsModule } from './chatrooms/chatrooms.module';
import { UserModule } from './user/user.module';

import { CustomCursorComponent } from './common/custom-cursor/custom-cursor.component';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { NotificationComponent } from './common/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotificationComponent,
    CustomCursorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    CommonModule,
    ChatroomsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }