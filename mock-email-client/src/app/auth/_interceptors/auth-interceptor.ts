import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../_services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  // This interceptor will change withCredentials to true so cookies are attached to each request
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modifiedReq = req.clone({
      withCredentials: true,
    });
    return next.handle(modifiedReq).pipe(
      tap((value) => {
        console.log(value);
        // If the event object that is coming out of our observable is trying to tell us the request was just sent to the server
        if (value.type === HttpEventType.Sent) {
          console.log('Request was sent to server.');
        }
        if (value.type === HttpEventType.Response) {
          console.log('Got a response from the API. ', value);
        }
      })
    );
  }
}
