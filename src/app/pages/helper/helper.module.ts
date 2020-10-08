import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SharedModule } from "../../shared/shared.module";
import { HelperCssPage } from "./helper-css/helper-css";

const routes: Routes = [
  { path: "css", component: HelperCssPage, data: { title: "Helper CSS"} },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [HelperCssPage],
  exports: [RouterModule],
})
export class HelperModule {}
