import { Component } from '@angular/core';
import { AuthService } from './auth/_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mock-email-client';

  public isSignedIn: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.signedIn$.subscribe((signedIn: boolean) => {
      this.isSignedIn = signedIn;
    });
  }
}
