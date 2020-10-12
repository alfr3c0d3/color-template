import { Component, OnInit } from "@angular/core";
import { SettingsService } from "../../../core/services/settings.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "../auth.service";
import { CustomValidators } from "ng2-validation";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  valForm: FormGroup;
  returnUrl: string;

  bg: string;
  bgList: Array<{ bg: string; active?: boolean }>;

  constructor(
    public settings: SettingsService,
    fb: FormBuilder,
    private _authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.valForm = fb.group({
      email: [
        null,
        Validators.compose([Validators.required, CustomValidators.email]),
      ],
      password: [null, Validators.required],
    });
  }

  submitForm($ev, value: any) {
    $ev.preventDefault();
    for (const c in this.valForm.controls) {
      this.valForm.controls[c].markAsTouched();
    }

    this._authService
      .login(
        this.valForm.controls["email"].value,
        this.valForm.controls["password"].value
      )
      .pipe(first())
      .subscribe(
        (data) => {
          console.log(data);

          this.router.navigate([this.returnUrl]);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  changeBg(list: { bg: any; active: any; }) {
    this.bg = list.bg;
    list.active = true;

    for (const bList of this.bgList) {
      if (bList !== list) {
        bList.active = false;
      }
    }
  }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/dashboard/v1";

    this.bgList = [
      { bg: "/assets/img/login-bg/login-bg-17.jpg" },
      { bg: "/assets/img/login-bg/login-bg-16.jpg", active: true },
      { bg: "/assets/img/login-bg/login-bg-15.jpg" },
      { bg: "/assets/img/login-bg/login-bg-14.jpg" },
      { bg: "/assets/img/login-bg/login-bg-13.jpg" },
      { bg: "/assets/img/login-bg/login-bg-12.jpg" },
    ];

    this.bg = this.bgList.find((bg) => bg.active).bg;

  }
}
