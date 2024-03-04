import { inject } from '@angular/core';
import { CanMatchFn, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { skipWhile, take, tap } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';

export const authGuard = (
  route: Route,
  segments: UrlSegment[]
): Observable<boolean | UrlTree | null> | Promise<boolean | UrlTree | null> | boolean | UrlTree | null => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  return authService.signedIn$.pipe(
    skipWhile((value) => value === null),
    take(1),
    tap((authenticated) => {
      if (!authenticated) {
        router.navigateByUrl('/');
      }
    })
  );
};
