import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";
import { RegisterV3Page } from "../register/register-v3/register-v3";
import { LoginV1Page } from "./login-v1/login-v1";
import { LoginV2Page } from "./login-v2/login-v2";
import { LoginV3Page } from "./login-v3/login-v3";

const routes: Routes = [
  { path: "v1", component: LoginV1Page, data: { title: "Login V1 Page" } },
  { path: "v2", component: LoginV2Page, data: { title: "Login V2 Page" } },
  { path: "v3", component: LoginV3Page, data: { title: "Login V3 Page" } },
  { path: "register-v3", component: RegisterV3Page, data: { title: "Register V3 Page" },
  },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [LoginV1Page, LoginV2Page, LoginV3Page, RegisterV3Page],
  exports: [RouterModule],
})
export class LoginModule {}
