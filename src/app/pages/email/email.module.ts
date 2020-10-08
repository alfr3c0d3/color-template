import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SharedModule } from "../../shared/shared.module";
import { EmailComposePage } from "./compose/email-compose";
import { EmailDetailPage } from "./detail/email-detail";
import { EmailInboxPage } from "./inbox/email-inbox";



const routes: Routes = [
  { path: "inbox", component: EmailInboxPage, data: { title: "Email Inbox"} },
  { path: "compose", component: EmailComposePage, data: { title: "Email Compose"} },
  { path: "detail", component: EmailDetailPage, data: { title: "Email Detail"} },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
EmailInboxPage,
EmailComposePage,
EmailDetailPage
  ],
  exports: [RouterModule],
})
export class EmailModule {}
