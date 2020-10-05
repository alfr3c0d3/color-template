import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // add authorization header with jwt token if available
    if (currentUser && currentUser.token) {
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'DateTime': moment(Date()).format('MM/DD/YYYY H:mm:ss'),
          Authorization: `Bearer ${currentUser.token}`
        }
      });
    }

    return next.handle(request);
  }
}
