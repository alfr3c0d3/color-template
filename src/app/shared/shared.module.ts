import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { DateAdapter, MatSortModule, MatTableModule } from "@angular/material";
import { FullCalendarModule } from "@fullcalendar/angular";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { LoadingBarRouterModule } from "@ngx-loading-bar/router";
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { CalendarModule } from "angular-calendar";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";
import { NvD3Module } from "ng2-nvd3";
import { ChartsModule } from "ng4-charts";
import { TagInputModule } from "ngx-chips";
import { CountdownModule } from "ngx-countdown";
import { Ng2TableModule } from "ngx-datatable";
import { NgxDaterangepickerMd } from "ngx-daterangepicker-material";
import { HighlightJsModule } from "ngx-highlight-js";
import { AgmCoreModule } from "@agm/core";
import { PanelComponent } from "../layout/panel/panel.component";
import "d3";
import "nvd3";

import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { TrendModule } from "ngx-trend";
import { WidgetPage } from "../pages/widget/widget";
import { Bootstrap4Page } from "../pages/bootstrap-4/bootstrap-4";
import { CalendarPage } from "../pages/calendar/calendar";
import { FormStuffPage } from "../pages/form-stuff/form-stuff";
import { MapPage } from "../pages/map/map";

// import { TranslateModule } from "@ngx-translate/core";
// import { ToasterModule } from "angular2-toaster/angular2-toaster";

// https://angular.io/styleguide#!#04-10
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    TrendModule,

    AgmCoreModule.forRoot({
      apiKey: "AIzaSyC5gJ5x8Yw7qP_DqvNq3IdZi2WUSiDjskk",
    }),

    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    CountdownModule,
    ChartsModule,

    FullCalendarModule,
    FormsModule,
    HighlightJsModule,
    LoadingBarRouterModule,
    MatSortModule,
    MatTableModule,
    NgbModule,
    NvD3Module,
    NgxChartsModule,
    Ng2TableModule,
    NgxDaterangepickerMd.forRoot(),
    PerfectScrollbarModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    TagInputModule,
  ],
  providers: [],
  declarations: [
    PanelComponent,

    WidgetPage,
    Bootstrap4Page,
    CalendarPage,
    FormStuffPage,
    MapPage,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // TranslateModule,
    RouterModule,

    WidgetPage,
    Bootstrap4Page,
    CalendarPage,
    FormStuffPage,
    MapPage,

    TrendModule,

    CalendarModule,
    CountdownModule,
    ChartsModule,

    AgmCoreModule,
    FullCalendarModule,
    FormsModule,
    HighlightJsModule,
    LoadingBarRouterModule,
    MatSortModule,
    MatTableModule,
    NgbModule,
    NvD3Module,
    NgxChartsModule,
    Ng2TableModule,
    NgxDaterangepickerMd,
    PerfectScrollbarModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    TagInputModule,

    PanelComponent,

  ],
})

// https://github.com/ocombe/ng2-translate/issues/209
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
    };
  }
}
