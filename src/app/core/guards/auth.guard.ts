import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import * as _ from "lodash";
import { JwtHelperService } from "@auth0/angular-jwt";
import { SettingsService } from "../services/settings.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private jwtHelper: JwtHelperService, private settingsService: SettingsService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const expectedRoles = route.data.expectedRoles;

    if (this.isAuthenticated() && _.some(expectedRoles, role => this.settingsService.getUserSetting("roles").includes(role))) {
      // Logged in and Menu allowed for that role
      return true;
    }

    // Not logged in so redirect to login page with the return url
    this.settingsService.clearUserSettings();
    this.router.navigate(["/login"], { queryParams: { returnUrl: state.url } });
    return false;
  }

  private isAuthenticated(): boolean {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    return currentUser && !this.jwtHelper.isTokenExpired(currentUser.token);
  }
}
