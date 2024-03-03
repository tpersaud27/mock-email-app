import { inject } from '@angular/core';
import { CanMatchFn, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { skipWhile, take } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';

export const authGuard = (
  route: Route,
  segments: UrlSegment[]
): Observable<boolean | null> | Promise<boolean | null> | boolean | null => {
  const authService: AuthService = inject(AuthService);

  return authService.signedIn$.pipe(
    skipWhile((value) => value === null),
    take(1)
  );
};
