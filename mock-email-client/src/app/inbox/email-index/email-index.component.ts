import { Component, OnInit } from '@angular/core';
import { EmailService } from '../_services/email.service';
import { EmailSummary } from 'src/app/auth/_interfaces/emailInterface';

@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrls: ['./email-index.component.css'],
})
export class EmailIndexComponent implements OnInit {
  constructor(private emailService: EmailService) {}

  ngOnInit() {
    this.getEmails();
  }

  public getEmails() {
    this.emailService.getEmails().subscribe({
      next: (response: EmailSummary[]) => {
        console.log('response emails ', response);
      },
      error: (error: any) => {
        console.log('Error getting emails ', error);
      },
    });
  }
}
