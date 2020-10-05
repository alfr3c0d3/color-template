import { Injectable } from "@angular/core";
import * as _ from "lodash";
import { JwtHelperService } from "@auth0/angular-jwt";
import { User } from "../../pages/auth/auth.model";

@Injectable()
export class SettingsService {

  private user: User;
  private app: any;
  private layout: any;

  public baseUrl: string;

  constructor(private jwtHelper: JwtHelperService) {

    // User Settings
    // -----------------------------------

    // App Settings
    // -----------------------------------
    this.app = {
      name: "Spectre",
      description: "Angular Bootstrap Admin Template",
      year: ((new Date()).getFullYear()),
      env: "dev"
    };

    // When refreshing
    if (localStorage.getItem("currentUser")) {
      this.setUserSettings(JSON.parse(localStorage.getItem("currentUser")));
      // this.setAppSettings(JSON.parse(localStorage.getItem("currentUser")));
    }

    if (_.some(["development", "dev"], env => env === this.app.env)) {
      this.baseUrl = "http://localhost:45211/";
    }
    else {
      this.baseUrl = "/server/";
    }

    // Layout Settings
    // -----------------------------------
    this.layout = {
      isFixed: true,
      isCollapsed: false,
      isBoxed: false,
      isRTL: false,
      horizontal: false,
      isFloat: false,
      asideHover: false,
      theme: null,
      asideScrollbar: false,
      isCollapsedText: false,
      useFullLayout: false,
      hiddenFooter: false,
      offsidebarOpen: false,
      asideToggled: false,
      viewAnimation: "ng-fadeInUp"
    };
  }

  getAppSetting(name) {
    return name ? this.app[name] : this.app;
  }

  getUserSetting(name?) {
    return name ? this.user[name] : this.user;
  }

  getLayoutSetting(name) {
    return name ? this.layout[name] : this.layout;
  }

  setAppSettings(obj) {
    const decodedToken = this.jwtHelper.decodeToken(obj.token);
    Object.assign(this.app, decodedToken["app"]);
  }

  setUserSettings(obj) {

    //When logging in
    if (!localStorage.getItem("currentUser")) {
      localStorage.setItem("currentUser", JSON.stringify(obj));
    }

    const decodedToken = this.jwtHelper.decodeToken(obj.token);

    this.user = {
      // id: decodedToken["sub"],
      email: decodedToken["email"],
      givenName: decodedToken["given_name"],
      roles: decodedToken["roles"],

      // TODO: Remove when pictures user pictures are working
      pictureUrl: "assets/img/user/02.jpg"
    } as User;
  }

  clearUserSettings() {
    localStorage.removeItem("currentUser");
    this.user = {} as User;
  }

  setAppSetting(name, value) {
    if (typeof this.app[name] !== "undefined") {
      this.app[name] = value;
    }
  }

  setUserSetting(name, value) {
    if (typeof this.user[name] !== "undefined") {
      this.user[name] = value;
    }
  }

  setLayoutSetting(name, value) {
    if (typeof this.layout[name] !== "undefined") {
      return this.layout[name] = value;
    }
  }

  toggleLayoutSetting(name) {
    return this.setLayoutSetting(name, !this.getLayoutSetting(name));
  }

}
