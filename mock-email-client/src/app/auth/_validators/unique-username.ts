import {
  AbstractControl,
  AsyncValidator,
  FormGroup,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// We add this validator to angular dependency injection system
// This validator needs access to the http client, this is why we need it to take advantage of the dependency injection system
@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator {
    constructor(private http: HttpClient) { }
    
    validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        throw new Error('Method not implemented.');
    }
    registerOnValidatorChange?(fn: () => void): void {
        throw new Error('Method not implemented.');
    }
}
