import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatchPassword } from '../_validators/match-password';
import { UniqueUsername } from '../_validators/unique-username';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  constructor(
    private matchPassword: MatchPassword,
    private uniqueUserName: UniqueUsername
  ) {}

  public signUpForm = new FormGroup(
    {
      // The pattern validator to to ensure the user only enters alphanumeric characters
      // Note the first set of validators are synchronous, the second set are asynchronous
      // Note: Angular first runs the synchronous validators then the asynchronous ones
      // The thought process here is that asynchronous validators are expensive operations so we should withold using them until absolutely needed
      username: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^[a-z0-9]+$/),
        ],
        [this.uniqueUserName.validate]
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
      passwordConfirmation: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
    },
    { validators: [this.matchPassword.validate] }
  );
}
