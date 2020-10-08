import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

// Widgets
import { WidgetPage }               from "./pages/widget/widget";

// Bootstrap 4
import { Bootstrap4Page }           from "./pages/bootstrap-4/bootstrap-4";

// Calendar
import { CalendarPage }             from "./pages/calendar/calendar";

// Map
import { MapPage }            			from "./pages/map/map";

// Form
import { FormStuffPage }            from "./pages/form-stuff/form-stuff";
import { AuthModule } from "./pages/auth/auth.module";
import { LoginComponent } from "./pages/auth/login/login.component";
import { LayoutComponent } from "./layout/layout.component";
import { SharedModule } from "./shared/shared.module";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "", redirectTo: "dashboard/v1", pathMatch: "full" },
      { path: "dashboard", loadChildren: "./pages/dashboard/dashboard.module#DashboardModule", data: { title: "Dashboard"} },
      { path: "email", loadChildren: "./pages/email/email.module#EmailModule", data: { title: "Email"} },
      { path: "widget", component: WidgetPage, data: { title: "Widgets" } },
      { path: "ui", loadChildren: "./pages/ui-elements/ui.module#UiModule", data: { title: "Ui Elements" } },
      { path: "bootstrap-4", component: Bootstrap4Page, data: { title: "Bootstrap 4" } },
      { path: "form-stuff", component: FormStuffPage, data: { title: "Form Stuff" } },
      { path: "tables", loadChildren: "./pages/tables/tables.module#TablesModule", data: { title: "Tables"} },
      { path: "charts", loadChildren: "./pages/charts/charts.module#ChartsModule", data: { title: "Charts" } },
      { path: "calendar", component: CalendarPage, data: { title: "Calendar"} },
      { path: "map", component: MapPage, data: { title: "Google Map"} },
      { path: "gallery", loadChildren: "./pages/gallery/gallery.module#GalleryModule", data: { title: "Gallery" } },
      { path: "page-option", loadChildren: "./pages/page-options/page-options.module#PageOptionsModule", data: { title: "Page Options" } },
      { path: "extra", loadChildren: "./pages/extra/extra.module#ExtraModule", data: { title: "Extra" } },
      { path: "login", loadChildren: "./pages/login/login.module#LoginModule", data: { title: "Login" } },
      { path: "helper", loadChildren: "./pages/helper/helper.module#HelperModule", data: { title: "Helper" } },
    ],
  },

  // Not lazy-loaded routes
  { path: "my-login", component: LoginComponent },
];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forRoot(routes), AuthModule],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
