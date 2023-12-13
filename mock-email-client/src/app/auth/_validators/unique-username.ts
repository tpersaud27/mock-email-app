import { AbstractControl, AsyncValidator } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, of } from 'rxjs';

// We add this validator to angular dependency injection system
// This validator needs access to the http client, this is why we need it to take advantage of the dependency injection system
@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator {
  constructor(private http: HttpClient) {}

  validate = (control: AbstractControl) => {
    const { value } = control;
    return this.http
      .post<any>('https://api.angular-email.com/auth/username', {
        username: value,
      })
      .pipe(
        map(() => {
          // If we get a successful request, then we return null
          // Note: If we can an error, it would not go through the map function, it would be emitted as an error.
          return null;
        }),
        catchError((error) => {
          console.log(error);
          // We need a new observable to return an object. So we can emit the error. We need to make sure the error we are getting is actually that the user name is taken, because otherwise we would return true if it was a server error or any other error.
          return error.error.username
            ? of({ nonUniqueUsername: true })
            : of({ noConnection: true });
        })
      );
  };
}
