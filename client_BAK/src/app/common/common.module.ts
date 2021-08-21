import { NgModule } from '@angular/core';
import { CommonModule as CModule } from '@angular/common';  

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NotificationComponent } from './notification/notification.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomCursorComponent } from './custom-cursor/custom-cursor.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotificationComponent,
    PageNotFoundComponent,
    CustomCursorComponent
  ],
  imports: [
    CModule
  ]
})
export class CommonModule { }
