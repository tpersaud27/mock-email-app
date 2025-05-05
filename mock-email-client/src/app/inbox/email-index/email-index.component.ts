import { Component, OnInit } from '@angular/core';
import { EmailService } from '../_services/email.service';
import { EmailSummary } from 'src/app/auth/_interfaces/emailInterface';

@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrls: ['./email-index.component.css'],
})
export class EmailIndexComponent implements OnInit {
  public emails: EmailSummary[] = [];

  constructor(private emailService: EmailService) {}

  ngOnInit() {
    this.getEmails();
  }

  public getEmails() {
    this.emailService.getEmails().subscribe({
      next: (emails: EmailSummary[]) => {
        this.emails = emails;
      },
      error: ({ error }) => {
        console.log('Error getting emails ', error);
      },
    });
  }
}
