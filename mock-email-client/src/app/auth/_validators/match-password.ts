import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { Injectable } from '@angular/core';

// We add this validator to angular dependency injection system
@Injectable({ providedIn: 'root' })
// This is a class based custom validator
export class MatchPassword implements Validator {
  // We are using formGroup to validate our signUpForm
  // We are specifically checking the passwords
  validate(signUpForm: AbstractControl) {
    const { password, passwordConfirmation } = signUpForm.value;
    // If the passwords match we return null because there is no error, otherwise we return true
    if (password === passwordConfirmation) {
      return null;
    } else {
      return { passwordsDontMatch: true };
    }
  }
}
