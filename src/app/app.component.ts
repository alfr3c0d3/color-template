import { Component, OnInit } from "@angular/core";
// import { Title }     from '@angular/platform-browser';
// import { Router, NavigationEnd, NavigationStart, ActivatedRoute } from '@angular/router';
// import pageSettings from './config/page-settings';
// import * as global from './config/globals';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // prevent empty links to reload the page
    document.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" && ["", "#"].indexOf(target.getAttribute("href")) > -1) {
        e.preventDefault();
      }
    }, {passive: true});
  }
}
