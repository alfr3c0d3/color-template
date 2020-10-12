import { NgModule } from "@angular/core";

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AuthService } from "./auth.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [LoginComponent, RegisterComponent],
  providers: [AuthService],

  exports: [
    LoginComponent,
    RegisterComponent
  ],
})
export class AuthModule {}
