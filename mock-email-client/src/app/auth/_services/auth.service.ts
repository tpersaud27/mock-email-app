import {
  SignedInResponse,
  SignInCredentials,
  SignUpCredentials,
  SignUpResponse,
  UsernameAvailableResponse,
} from './../_interfaces/authInterfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'https://api.angular-email.com';
  // This behaviorSubject will emit a value of true when someone is signed in, otherwise the default value is false
  public signedIn$ = new BehaviorSubject<boolean | null>(null);

  constructor(private http: HttpClient) {}

  public isUserNameAvailable(username: string) {
    return this.http.post<UsernameAvailableResponse>(this.baseUrl + '/auth/username', {
      username,
    });
  }

  // Note: by default httpClient will ignore cookies so we need to add withCredentials or use a httpInterceptor
  public signUp(credentials: SignUpCredentials) {
    return this.http.post<SignUpResponse>(this.baseUrl + '/auth/signup', credentials).pipe(
      // tap allows us to reach in and intercept a value and lets us to something
      // it does not change the underlying value
      // Note: if we have an error coming out of the observable it will skip over the tap operator
      tap(() => {
        this.signedIn$.next(true);
      })
    );
  }

  public signOut() {
    // API returns a cookie that clears out information.
    // Essentially forgets out login token
    return this.http.post(this.baseUrl + '/auth/signout', {}).pipe(
      tap(() => {
        // Notify application we are no longer signed in
        this.signedIn$.next(false);
      })
    );
  }

  public signIn(credentials: SignInCredentials) {
    return this.http.post(`${this.baseUrl}/auth/signin`, credentials).pipe(
      tap(() => {
        this.signedIn$.next(true);
      })
    );
  }

  public checkIfUserIsSignedIn() {
    return this.http.get<SignedInResponse>(this.baseUrl + '/auth/signedin').pipe(
      tap(({ authenticated }) => {
        console.log({ authenticated });
        // If the user is signed in, we want to emit a value of true for the behaviorsubject or if the user is not signed in we emit false. This value will come back from the API response
        this.signedIn$.next(authenticated);
      })
    );
  }
}
