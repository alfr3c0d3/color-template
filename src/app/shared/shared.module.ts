import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

// UI Element
import { UIButtonsPage } from "../pages/ui-elements/buttons/buttons";
import { UIGeneralPage } from "../pages/ui-elements/general/general";
import { UIIconsPage } from "../pages/ui-elements/icons/icons";
import { UIIoniconsPage } from "../pages/ui-elements/ionicons/ionicons";
import { UILanguageIconPage } from "../pages/ui-elements/language-icon/language-icon";
import { UIMediaObjectPage } from "../pages/ui-elements/media-object/media-object";
import { UIModalNotificationPage } from "../pages/ui-elements/modal-notification/modal-notification";
import { UISimpleLineIconsPage } from "../pages/ui-elements/simple-line-icons/simple-line-icons";
import { UISocialButtonsPage } from "../pages/ui-elements/social-buttons/social-buttons";
import { UITabsAccordionsPage } from "../pages/ui-elements/tabs-accordions/tabs-accordions";
import { UITypographyPage } from "../pages/ui-elements/typography/typography";
import { UIWidgetBoxesPage } from "../pages/ui-elements/widget-boxes/widget-boxes";


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

// import { TranslateModule } from "@ngx-translate/core";
// import { ToasterModule } from "angular2-toaster/angular2-toaster";

// import { AccordionModule } from "ngx-bootstrap/accordion";
// import { AlertModule } from "ngx-bootstrap/alert";
// import { ButtonsModule } from "ngx-bootstrap/buttons";
// import { CarouselModule } from "ngx-bootstrap/carousel";
// import { CollapseModule } from "ngx-bootstrap/collapse";
// import { BsDropdownModule } from "ngx-bootstrap/dropdown";
// import { ModalModule } from "ngx-bootstrap/modal";
// import { PaginationModule } from "ngx-bootstrap/pagination";
// import { ProgressbarModule } from "ngx-bootstrap/progressbar";
// import { RatingModule } from "ngx-bootstrap/rating";
// import { TabsModule } from "ngx-bootstrap/tabs";
// import { TimepickerModule } from "ngx-bootstrap/timepicker";
// import { TooltipModule } from "ngx-bootstrap/tooltip";
// import { PopoverModule } from "ngx-bootstrap/popover";
// import { TypeaheadModule } from "ngx-bootstrap/typeahead";
// import { DatepickerModule } from "ngx-bootstrap/datepicker";
// import { BsDatepickerModule } from "ngx-bootstrap/datepicker";

// import { FlotDirective } from "./directives/flot/flot.directive";
// import { SparklineDirective } from "./directives/sparkline/sparkline.directive";
// import { EasypiechartDirective } from "./directives/easypiechart/easypiechart.directive";
// import { ColorsService } from "./colors/colors.service";
// import { CheckallDirective } from "./directives/checkall/checkall.directive";
// import { VectormapDirective } from "./directives/vectormap/vectormap.directive";
// import { NowDirective } from "./directives/now/now.directive";
// import { ScrollableDirective } from "./directives/scrollable/scrollable.directive";
// import { JqcloudDirective } from "./directives/jqcloud/jqcloud.directive";


// import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
// import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
// import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
// const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
//   suppressScrollX: true,
// };

// https://angular.io/styleguide#!#04-10
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // PerfectScrollbarModule,
    // TranslateModule,
    // AccordionModule.forRoot(),
    // AlertModule.forRoot(),
    // ButtonsModule.forRoot(),
    // CarouselModule.forRoot(),
    // CollapseModule.forRoot(),
    // DatepickerModule.forRoot(),
    // BsDatepickerModule.forRoot(),
    // BsDropdownModule.forRoot(),
    // ModalModule.forRoot(),
    // PaginationModule.forRoot(),
    // ProgressbarModule.forRoot(),
    // RatingModule.forRoot(),
    // TabsModule.forRoot(),
    // TimepickerModule.forRoot(),
    // TooltipModule.forRoot(),
    // PopoverModule.forRoot(),
    // TypeaheadModule.forRoot(),
    // ToasterModule,

PerfectScrollbarModule,
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
    // PerfectScrollbarModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    TagInputModule,
  ],
  providers: [],
  declarations: [
    PanelComponent,

    UIGeneralPage,
    UITypographyPage,
    UITabsAccordionsPage,
    UIModalNotificationPage,
    UIWidgetBoxesPage,
    UIMediaObjectPage,
    UIButtonsPage,
    UIIconsPage,
    UISimpleLineIconsPage,
    UIIoniconsPage,
    UILanguageIconPage,
    UISocialButtonsPage,
    // FlotDirective,
    // SparklineDirective,
    // EasypiechartDirective,
    // CheckallDirective,
    // VectormapDirective,
    // NowDirective,
    // ScrollableDirective,
    // JqcloudDirective,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // TranslateModule,
    RouterModule,
    // AccordionModule,
    // AlertModule,
    // ButtonsModule,
    // CarouselModule,
    // CollapseModule,
    // DatepickerModule,
    // BsDatepickerModule,
    // BsDropdownModule,
    // ModalModule,
    // PaginationModule,
    // ProgressbarModule,
    // RatingModule,
    // TabsModule,
    // TimepickerModule,
    // TooltipModule,
    // PopoverModule,
    // TypeaheadModule,
    // ToasterModule,
    // FlotDirective,
    // SparklineDirective,
    // EasypiechartDirective,
    // CheckallDirective,
    // VectormapDirective,
    // NowDirective,
    // ScrollableDirective,
    // JqcloudDirective,

PerfectScrollbarModule,
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
    // PerfectScrollbarModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    TagInputModule,

    PanelComponent,
    UIGeneralPage,
    UITypographyPage,
    UITabsAccordionsPage,
    UIModalNotificationPage,
    UIWidgetBoxesPage,
    UIMediaObjectPage,
    UIButtonsPage,
    UIIconsPage,
    UISimpleLineIconsPage,
    UIIoniconsPage,
    UILanguageIconPage,
    UISocialButtonsPage,
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
