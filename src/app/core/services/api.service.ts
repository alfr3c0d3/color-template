import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import "rxjs/add/observable/throw";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { SettingsService } from "./settings.service";


@Injectable()
export class ApiService {

  constructor(private http: HttpClient, private router: Router, private _settings: SettingsService) { }

  get(path: string): Observable<any> {

    let url = `${this._settings.baseUrl}${path}`;


    return this.http.get(url).pipe(catchError(this.handleError));
  }

  post(path: string, body): Observable<any> {

    return this.http.post(`${this._settings.baseUrl}${path}`, body).pipe(catchError(this.handleError));
  }

  delete(path, body?): Observable<any> {

    return this.http.delete(`${this._settings.baseUrl}${path}`).pipe(catchError(this.handleError));
  }

  patch(path: string, body): Observable<any> {

    let url = `${this._settings.baseUrl}${path}`;

    return this.http.patch(url, body)
      .pipe(catchError(this.handleError));
  }


  private checkForUnauthorized(err: any) {
    if (err.status === 401) {
      this.router.navigate(["/login"]);
    }
    return Observable.throw(err);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }


    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  };


}
