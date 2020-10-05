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
    styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {

    valForm: FormGroup;
    returnUrl: string;

    constructor(
        public settings: SettingsService,
        fb: FormBuilder,
        private _authService: AuthService,
        private route: ActivatedRoute,
        private router: Router
    ) {

        this.valForm = fb.group({
            "email": [null, Validators.compose([Validators.required, CustomValidators.email])],
            "password": [null, Validators.required]
        });

    }

    submitForm($ev, value: any) {
        $ev.preventDefault();
        for (let c in this.valForm.controls) {
            this.valForm.controls[c].markAsTouched();
        }
        if (this.valForm.valid) {
            console.log("Valid!");
            console.log(value);
        }

        this._authService.login(this.valForm.controls["email"].value, this.valForm.controls["password"].value)
        .pipe(first())
        .subscribe(
            data => {
                console.log(data);

                this.router.navigate([this.returnUrl]);
            },
            error => {
              //  this.alertService.error(error);
                //this.loading = false;
                console.log(error);

            });

    }

    ngOnInit() {
         // get return url from route parameters or default to '/'
         this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/home";
    }

}
