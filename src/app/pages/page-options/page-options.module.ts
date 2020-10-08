import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";
import { BoxedLayoutMixedMenu } from "./boxed-layout-with-mixed-menu/boxed-layout-with-mixed-menu";
import { PageBlank } from "./page-blank/page-blank";
import { PageFullHeight } from "./page-full-height/page-full-height";
import { PageBoxedLayout } from "./page-with-boxed-layout/page-with-boxed-layout";
import { PageFooter } from "./page-with-footer/page-with-footer";
import { PageSidebarLight } from "./page-with-light-sidebar/page-with-light-sidebar";
import { PageMegaMenu } from "./page-with-mega-menu/page-with-mega-menu";
import { PageSidebarMinified } from "./page-with-minified-sidebar/page-with-minified-sidebar";
import { PageMixedMenu } from "./page-with-mixed-menu/page-with-mixed-menu";
import { PageSidebarRight } from "./page-with-right-sidebar/page-with-right-sidebar";
import { PageSidebarSearch } from "./page-with-search-sidebar/page-with-search-sidebar";
import { PageTopMenu } from "./page-with-top-menu/page-with-top-menu";
import { PageSidebarTransparent } from "./page-with-transparent-sidebar/page-with-transparent-sidebar";
import { PageTwoSidebar } from "./page-with-two-sidebar/page-with-two-sidebar";
import { PageSidebarWide } from "./page-with-wide-sidebar/page-with-wide-sidebar";
import { PageWithoutSidebar } from "./page-without-sidebar/page-without-sidebar";

const routes: Routes = [
  { path: "page-blank", component: PageBlank, data: { title: "Blank Page"} },
  { path: "page-with-footer", component: PageFooter, data: { title: "Page with Footer" } },
  { path: "page-without-sidebar", component: PageWithoutSidebar, data: { title: "Page without Sidebar" } },
  { path: "page-with-right-sidebar", component: PageSidebarRight, data: { title: "Page with Right Sidebar" } },
  { path: "page-with-minified-sidebar", component: PageSidebarMinified, data: { title: "Page with Minified Sidebar"} },
  { path: "page-with-two-sidebar", component: PageTwoSidebar, data: { title: "Page with Two Sidebar" } },
  { path: "page-full-height", component: PageFullHeight, data: { title: "Full Height Content" } },
  { path: "page-with-wide-sidebar", component: PageSidebarWide, data: { title: "Page with Wide Sidebar" } },
  { path: "page-with-light-sidebar", component: PageSidebarLight, data: { title: "Page with Light Sidebar" } },
  { path: "page-with-transparent-sidebar", component: PageSidebarTransparent, data: { title: "Page with Transparent Sidebar" } },
  { path: "page-with-top-menu", component: PageTopMenu, data: { title: "Page with Top Menu" } },
  { path: "page-with-mixed-menu", component: PageMixedMenu, data: { title: "Page with Mixed Menu" } },
  { path: "page-with-boxed-layout", component: PageBoxedLayout, data: { title: "Page with Boxed Layout" } },
  { path: "page-with-mega-menu", component: PageMegaMenu, data: { title: "Page with Mega Menu" } },
  { path: "boxed-layout-with-mixed-menu", component: BoxedLayoutMixedMenu, data: { title: "Boxed Layout with Mixed Menu" } },
  { path: "page-with-search-sidebar", component: PageSidebarSearch, data: { title: "Page with Search Sidebar" } },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [
    PageBlank,
    PageFooter,
    PageWithoutSidebar,
    PageSidebarRight,
    PageSidebarMinified,
    PageFullHeight,
    PageTwoSidebar,
    PageSidebarWide,
    PageSidebarLight,
    PageSidebarTransparent,
    PageSidebarSearch,
    PageTopMenu,
    PageMixedMenu,
    PageBoxedLayout,
    PageMegaMenu,
    BoxedLayoutMixedMenu,
  ],
  exports: [
    RouterModule,
    PageBlank,
    PageFooter,
    PageWithoutSidebar,
    PageSidebarRight,
    PageSidebarMinified,
    PageFullHeight,
    PageTwoSidebar,
    PageSidebarWide,
    PageSidebarLight,
    PageSidebarTransparent,
    PageSidebarSearch,
    PageTopMenu,
    PageMixedMenu,
    PageBoxedLayout,
    PageMegaMenu,
    BoxedLayoutMixedMenu,
  ],
})
export class PageOptionsModule {}
