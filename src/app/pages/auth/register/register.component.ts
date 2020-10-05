import { Component, OnInit } from "@angular/core";

import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { CustomValidators } from "ng2-validation";
import { first } from "rxjs/operators";
import { Router } from "@angular/router";
import { RegistrationUser } from "../auth.model";
import { AuthService } from "../auth.service";
import { SettingsService } from "../../../core/services/settings.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {

  valForm: FormGroup;
  passwordForm: FormGroup;

  constructor(
    public settings: SettingsService,
    public fb: FormBuilder,
    private router: Router,
    private userService: AuthService) {

    const password = new FormControl("", Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9]{6,10}$")]));
    const certainPassword = new FormControl("", CustomValidators.equalTo(password));

    this.passwordForm = fb.group({
      "password": password,
      "confirmPassword": certainPassword
    });

    this.valForm = fb.group({
      "firstName": [null, Validators.required],
      "lastName": [null, Validators.required],
      "email": [null, Validators.compose([Validators.required, CustomValidators.email])],
      "accountagreed": [null, Validators.required],
      "passwordGroup": this.passwordForm
    });
  }

  submitForm($ev, value: any) {
    $ev.preventDefault();
    for (let c in this.valForm.controls) {
      this.valForm.controls[c].markAsTouched();
    }
    for (let c in this.passwordForm.controls) {
      this.passwordForm.controls[c].markAsTouched();
    }

    if (this.valForm.valid) {
      console.log("Valid!");
      console.log(value);

      const user = {
        firstName: this.valForm.controls["firstName"].value,
        lastName: this.valForm.controls["lastName"].value,
        email: this.valForm.controls["email"].value,
        password: this.valForm.get("passwordGroup.password").value
      } as RegistrationUser;

      this.userService.register(user)
        .pipe(first())
        .subscribe(
          data => {
            // this.alertService.success('Registration successful', true);
            this.router.navigate(["/login"]);
          },
          error => {
            // this.alertService.error(error);
            // this.loading = false;
            console.log(error);
          });
    }


  }

  ngOnInit() {
  }

}
