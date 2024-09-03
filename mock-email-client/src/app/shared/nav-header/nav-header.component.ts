import { BehaviorSubject } from 'rxjs';
import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css'],
})
export class NavHeaderComponent {
  @Input() signedIn$ = new BehaviorSubject<boolean | null>(false);

  public displayVersion;
  public title;

  constructor() {
    console.log(environment.displayVersion);

    if (environment.production) {
      console.log('PRODUCTION ENV ', environment.title);
      this.title = environment.title;
    }
    this.displayVersion = environment.displayVersion;
  }
}
