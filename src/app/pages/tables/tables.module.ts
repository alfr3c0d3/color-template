import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";
import { TableBasicPage } from "./table-basic/table-basic";
import { TableDataPage } from "./table-data/table-data";




const routes: Routes = [
  { path: "basic", component: TableBasicPage, data: { title: "Basic Tables"} },
  { path: "data", component: TableDataPage, data: { title: "Ngx DataTable"} },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [TableBasicPage, TableDataPage],
  exports: [RouterModule],
})
export class TablesModule {}


