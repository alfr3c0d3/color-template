import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { RecoverComponent } from "./recover/recover.component";
import { AuthService } from "./auth.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

/* Use this routes definition in case you want to make them lazy-loaded */
/*const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'recover', component: RecoverComponent },
    { path: 'lock', component: LockComponent },
    { path: 'maintenance', component: MaintenanceComponent },
    { path: '404', component: Error404Component },
    { path: '500', component: Error500Component },
];*/

@NgModule({
  imports: [
    RouterModule, // .forChild(routes)
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [LoginComponent, RegisterComponent, RecoverComponent],
  providers: [AuthService],

  exports: [
    RouterModule,
    LoginComponent,
    RegisterComponent,
    RecoverComponent,
  ],
})
export class AuthModule {}
