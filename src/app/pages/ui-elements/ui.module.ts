import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";
import { UIButtonsPage } from "./buttons/buttons";
import { UIGeneralPage } from "./general/general";
import { UIIconsPage } from "./icons/icons";
import { UIIoniconsPage } from "./ionicons/ionicons";
import { UILanguageIconPage } from "./language-icon/language-icon";
import { UIMediaObjectPage } from "./media-object/media-object";
import { UIModalNotificationPage } from "./modal-notification/modal-notification";
import { UISimpleLineIconsPage } from "./simple-line-icons/simple-line-icons";
import { UISocialButtonsPage } from "./social-buttons/social-buttons";
import { UITabsAccordionsPage } from "./tabs-accordions/tabs-accordions";
import { UITypographyPage } from "./typography/typography";
import { UIWidgetBoxesPage } from "./widget-boxes/widget-boxes";




const routes: Routes = [
  { path: "general", component: UIGeneralPage, data: { title: "UI General"} },
  { path: "typography", component: UITypographyPage, data: { title: "UI Typography"} },
  { path: "tabs-accordions", component: UITabsAccordionsPage, data: { title: "UI Tabs & Accordions"} },
  { path: "modal-notification", component: UIModalNotificationPage, data: { title: "UI Modal & Notification"} },
  { path: "widget-boxes", component: UIWidgetBoxesPage, data: { title: "UI Widget Boxes"} },
  { path: "media-object", component: UIMediaObjectPage, data: { title: "UI Media Object"} },
  { path: "buttons", component: UIButtonsPage, data: { title: "UI Buttons"} },
  { path: "icons", component: UIIconsPage, data: { title: "UI Icons"} },
  { path: "simple-line-icons", component: UISimpleLineIconsPage, data: { title: "UI SimpleLineIcons"} },
  { path: "ionicons", component: UIIoniconsPage, data: { title: "UI Ionicons"} },
  { path: "language-icon", component: UILanguageIconPage, data: { title: "UI Language Bar Icon"} },
  { path: "social-buttons", component: UISocialButtonsPage, data: { title: "UI Social Buttons"} },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [

  ],
  exports: [RouterModule],
})
export class UiModule {}


