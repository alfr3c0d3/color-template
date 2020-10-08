import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";
import { DateAdapter } from "angular-calendar";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";

import { DashboardV1Page } from "./v1/dashboard-v1";
import { DashboardV2Page } from "./v2/dashboard-v2";
import { DashboardV3Page } from "./v3/dashboard-v3";

const routes: Routes = [
  { path: "v1", component: DashboardV1Page, data: { title: "Dashboard V1" } },
  { path: "v2", component: DashboardV2Page, data: { title: "Dashboard V2" } },
  { path: "v3", component: DashboardV3Page, data: { title: "Dashboard V3" } },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  providers: [
    {provide: DateAdapter, useFactory: adapterFactory},
  ],
  declarations: [DashboardV1Page, DashboardV2Page, DashboardV3Page],
  exports: [RouterModule],
})
export class DashboardModule {}
