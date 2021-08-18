import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  checkoutForm = this.formBuilder.group({
    email: '',
    password: ''
  });

  constructor(
    private formBuilder: FormBuilder
  ) {}

  login(event: Event): void {
    // event.preventDefault();

    console.log("HERE");
    console.log(this.checkoutForm);
  }
}
