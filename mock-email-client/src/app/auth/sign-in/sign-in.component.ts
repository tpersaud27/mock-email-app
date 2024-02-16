import { AuthService } from 'src/app/auth/_services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { SignInCredentials } from '../_interfaces/authInterfaces';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  constructor(private authService: AuthService) {}

  public authForm = new FormGroup({
    username: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern(/^[a-z0-9]+$/),
      ],
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(4), Validators.maxLength(20)],
    }),
  });

  public onSubmit(): void {
    // First we check if the form is invalid
    if (this.authForm.invalid) {
      return;
    }
    // The value object of the form should have a username and password associated to it
    this.authService.signIn(this.authForm.value as SignInCredentials).subscribe({
      next: (response: any) => {
        console.log('response ', response);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
