import { SignUpCredentials } from './../_interfaces/authInterfaces';
import { AuthService } from './../_services/auth.service';
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
    private uniqueUserName: UniqueUsername,
    private authService: AuthService
  ) {}

  //TODO: Add form getters
  public signUpForm = new FormGroup(
    {
      // The pattern validator to to ensure the user only enters alphanumeric characters
      // Note the first set of validators are synchronous, the second set are asynchronous
      // Note: Angular first runs the synchronous validators then the asynchronous ones
      // The thought process here is that asynchronous validators are expensive operations so we should withold using them until absolutely needed
      username: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^[a-z0-9]+$/),
        ],
        asyncValidators: [this.uniqueUserName.validate],
      }),
      password: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
        ],
      }),
      passwordConfirmation: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
        ],
      }),
    },
    {
      validators: [this.matchPassword.validate],
    }
  );

  public onSubmit() {
    if (this.signUpForm.invalid) {
      return;
    }

    this.authService
      .signUp(this.signUpForm.value as SignUpCredentials)
      .subscribe({
        next: (response) => {
          console.log(JSON.stringify(response));
          // Navigate over to some other route or handle successful signup
        },
        error: (error) => {
          !error.status
            ? this.signUpForm.setErrors({ noConnection: true })
            : this.signUpForm.setErrors({ unknownError: true });
        },
      });

    console.log(this.signUpForm.value);
  }
}
