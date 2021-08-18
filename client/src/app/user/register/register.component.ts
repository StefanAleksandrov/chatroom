import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.scss']
  // styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  checkoutForm = this.formBuilder.group({
    email: '',
    password: '',
    "repeat-password": ''
  });

  constructor(
    private formBuilder: FormBuilder
  ) { }

  register() {

  }
}
