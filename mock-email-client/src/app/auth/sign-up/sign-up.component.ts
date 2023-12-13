import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  public signUpForm = new FormGroup({
    username: new FormControl('', []),
    password: new FormControl('', []),
    passwordConfirmation: new FormControl('', []),
  });
}
