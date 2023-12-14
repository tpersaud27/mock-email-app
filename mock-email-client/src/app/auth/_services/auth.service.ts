import {
  SignUpCredentials,
  SignUpResponse,
  UsernameAvailableResponse,
} from './../_interfaces/authInterfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'https://api.angular-email.com';

  constructor(private http: HttpClient) {}

  public isUserNameAvailable(username: string) {
    return this.http.post<UsernameAvailableResponse>(
      this.baseUrl + '/auth/username',
      {
        username,
      }
    );
  }

  public signUp(credentials: SignUpCredentials) {
    return this.http.post<SignUpResponse>(
      this.baseUrl + '/auth/signup',
      credentials
    );
  }
}
