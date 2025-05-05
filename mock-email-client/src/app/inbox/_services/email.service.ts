import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailSummary } from 'src/app/auth/_interfaces/emailInterface';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  rootUrl = 'https://api.angular-email.com';

  constructor(private httpClient: HttpClient) {}

  public getEmails() {
    return this.httpClient.get<EmailSummary[]>(`${this.rootUrl}/emails`);
  }
}
