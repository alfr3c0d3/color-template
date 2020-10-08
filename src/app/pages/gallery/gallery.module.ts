import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";
import { GalleryV1Page } from "./gallery-v1/gallery-v1";
import { GalleryV2Page } from "./gallery-v2/gallery-v2";

const routes: Routes = [
  { path: "v1", component: GalleryV1Page, data: { title: "Gallery V1"} },
  { path: "v2", component: GalleryV2Page, data: { title: "Gallery V2"} },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [GalleryV1Page, GalleryV2Page],
  exports: [RouterModule],
})
export class GalleryModule { }
