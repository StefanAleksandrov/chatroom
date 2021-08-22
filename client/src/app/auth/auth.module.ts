import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing module
import { AuthRoutingModule } from './auth-routing.module';

// Components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
