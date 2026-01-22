import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailSummary } from 'src/app/auth/_interfaces/emailInterface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  rootUrl = environment.rootUrl;

  constructor(private httpClient: HttpClient) {}

  public getEmails() {
    return this.httpClient.get<EmailSummary[]>(`${this.rootUrl}/emails`);
  }
}
