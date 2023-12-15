import { BehaviorSubject } from 'rxjs';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css'],
})
export class NavHeaderComponent {
  @Input() signedIn$ = new BehaviorSubject(false);
}
