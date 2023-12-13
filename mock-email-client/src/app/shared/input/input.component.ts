import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() public control: AbstractControl | any;
  @Input() public label!: string;
  @Input() public inputType!: string;

  // Checks if the form control contains any of these errors
  // Note: this syntax is object destructuring
  public showErrors() {
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }
}
