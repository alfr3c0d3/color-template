import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";
import { ExtraComingSoonPage } from "./extra-coming-soon/extra-coming-soon";
import { ExtraCookieAcceptanceBannerPage } from "./extra-cookie-acceptance-banner/extra-cookie-acceptance-banner";
import { ExtraErrorPage } from "./extra-error/extra-error";
import { ExtraInvoicePage } from "./extra-invoice/extra-invoice";
import { ExtraProfilePage } from "./extra-profile/extra-profile";
import { ExtraScrumBoardPage } from "./extra-scrum-board/extra-scrum-board";
import { ExtraSearchResultsPage } from "./extra-search-results/extra-search-results";
import { ExtraTimelinePage } from "./extra-timeline/extra-timeline";

const routes: Routes = [
  { path: "timeline", component: ExtraTimelinePage, data: { title: "Timeline"} },
  { path: "coming-soon", component: ExtraComingSoonPage, data: { title: "Coming Soon Page"} },
  { path: "search-results", component: ExtraSearchResultsPage, data: { title: "Search Results Page"} },
  { path: "error-page", component: ExtraErrorPage, data: { title: "Error Page"} },
  { path: "invoice", component: ExtraInvoicePage, data: { title: "Invoice"} },
  { path: "profile", component: ExtraProfilePage, data: { title: "Profile Page"} },
  { path: "scrum-board", component: ExtraScrumBoardPage, data: { title: "Scrum Board"} },
  { path: "cookie-acceptance-banner", component: ExtraCookieAcceptanceBannerPage, data: { title: "Cookie Acceptance Banner"} },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [
    ExtraTimelinePage,
    ExtraComingSoonPage,
    ExtraSearchResultsPage,
    ExtraErrorPage,
    ExtraInvoicePage,
    ExtraProfilePage,
    ExtraScrumBoardPage,
    ExtraCookieAcceptanceBannerPage
  ],
  exports: [RouterModule],
})
export class ExtraModule {}
