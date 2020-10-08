import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";
import { ChartD3Page } from "./chart-d3/chart-d3";
import { ChartNgxPage } from "./chart-ngx/chart-ngx";

const routes: Routes = [
  { path: "ngx", component: ChartNgxPage, data: { title: "Chart Ngx"} },
  { path: "d3", component: ChartD3Page, data: { title: "Chart D3"} },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [ChartNgxPage, ChartD3Page],
  exports: [RouterModule],
})
export class ChartsModule { }
