import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";
import { RegistrationUser } from "./auth.model";
import { ApiService } from "../../core/services/api.service";
import { SettingsService } from "../../core/services/settings.service";

@Injectable()
export class AuthService {
  private path = "api/auth";

  constructor(private _api: ApiService, private _settings: SettingsService) { }

  register(user: RegistrationUser) {
    return this._api.post(`${this.path}/register`, user);
  }

  login(username: string, password: string): Observable<string> {
    return this._api.post(`${this.path}/login`, { username: username, password: password })
      .pipe(map((token) => {

        // login successful if there's a jwt token in the response
        if (token) {

          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this._settings.setUserSettings(token);
        }

        return token;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    this._settings.clearUserSettings();
  }

}
