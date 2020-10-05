import { NgModule } from "@angular/core";

import { LayoutComponent } from "./layout.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { SidebarRightComponent } from "./sidebar-right/sidebar-right.component";
import { TopMenuComponent } from "./top-menu/top-menu.component";
import { FloatSubMenuComponent } from "./float-sub-menu/float-sub-menu.component";
import { SharedModule } from "../shared/shared.module";

import { BoxedLayoutMixedMenu } from "../pages/page-options/boxed-layout-with-mixed-menu/boxed-layout-with-mixed-menu";
import { PageBlank } from "../pages/page-options/page-blank/page-blank";
import { PageFullHeight } from "../pages/page-options/page-full-height/page-full-height";
import { PageBoxedLayout } from "../pages/page-options/page-with-boxed-layout/page-with-boxed-layout";
import { PageFooter } from "../pages/page-options/page-with-footer/page-with-footer";
import { PageSidebarLight } from "../pages/page-options/page-with-light-sidebar/page-with-light-sidebar";
import { PageMegaMenu } from "../pages/page-options/page-with-mega-menu/page-with-mega-menu";
import { PageSidebarMinified } from "../pages/page-options/page-with-minified-sidebar/page-with-minified-sidebar";
import { PageMixedMenu } from "../pages/page-options/page-with-mixed-menu/page-with-mixed-menu";
import { PageSidebarRight } from "../pages/page-options/page-with-right-sidebar/page-with-right-sidebar";
import { PageSidebarSearch } from "../pages/page-options/page-with-search-sidebar/page-with-search-sidebar";
import { PageTopMenu } from "../pages/page-options/page-with-top-menu/page-with-top-menu";
import { PageSidebarTransparent } from "../pages/page-options/page-with-transparent-sidebar/page-with-transparent-sidebar";
import { PageTwoSidebar } from "../pages/page-options/page-with-two-sidebar/page-with-two-sidebar";
import { PageSidebarWide } from "../pages/page-options/page-with-wide-sidebar/page-with-wide-sidebar";
import { PageWithoutSidebar } from "../pages/page-options/page-without-sidebar/page-without-sidebar";

import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

@NgModule({
  imports: [SharedModule],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
  declarations: [
    LayoutComponent,

    HeaderComponent,
    SidebarComponent,
    SidebarRightComponent,
    TopMenuComponent,
    FooterComponent,
    FloatSubMenuComponent,

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
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    SidebarRightComponent,
    TopMenuComponent,
    FooterComponent,
    FloatSubMenuComponent,
  ],
})
export class LayoutModule {}
