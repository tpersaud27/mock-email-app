import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth/_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mock-email-client';
  public signedIn$: BehaviorSubject<boolean | null>;

  constructor(private authService: AuthService) {
    this.signedIn$ = this.authService.signedIn$;
  }

  ngOnInit() {
    sessionStorage.setItem('token', 'tommyToken');
    this.authService.checkIfUserIsSignedIn().subscribe(() => {});
  }
}
