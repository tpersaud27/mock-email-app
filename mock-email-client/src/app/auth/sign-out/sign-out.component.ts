import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css'],
})
export class SignOutComponent {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.onSignOut();
  }

  public onSignOut(): void {
    this.authService.signOut().subscribe(() => {
      // Navigate user to back to sign in page
    });
  }
}
