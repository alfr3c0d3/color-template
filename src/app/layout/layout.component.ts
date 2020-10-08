import { Component, HostListener, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Router, NavigationEnd, ActivatedRoute, NavigationStart} from "@angular/router";
import pageSettings from "../config/page-settings";


@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent implements OnInit {
  constructor(
    router: Router,
    private titleService: Title,
    private route: ActivatedRoute
  ) {
    router.events.subscribe((e) => {
      if (e instanceof NavigationStart) {
        if (window.innerWidth < 768) {
          this.pageSettings.pageMobileSidebarToggled = false;
        }
      }
      if (e instanceof NavigationEnd) {
        const title = `Color Admin | ${this.route.snapshot.firstChild.data["title"]}`;
        this.titleService.setTitle(title);
      }
    });
  }

  pageSettings;

  // window scroll
  pageHasScroll;

  ngOnInit() {
    // page settings
    this.pageSettings = pageSettings;
  }
  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    let doc = document.documentElement;
    let top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 0) {
      this.pageHasScroll = true;
    } else {
      this.pageHasScroll = false;
    }
  }

  // set page minified
  onToggleSidebarMinified(): void {
    if (this.pageSettings.pageSidebarMinified) {
      this.pageSettings.pageSidebarMinified = false;
    } else {
      this.pageSettings.pageSidebarMinified = true;
    }
  }

  // set page right collapse
  onToggleSidebarRight(): void {
    if (this.pageSettings.pageSidebarRightCollapsed) {
      this.pageSettings.pageSidebarRightCollapsed = false;
    } else {
      this.pageSettings.pageSidebarRightCollapsed = true;
    }
  }

  // hide mobile sidebar
  onHideMobileSidebar(): void {
    if (this.pageSettings.pageMobileSidebarToggled) {
      if (this.pageSettings.pageMobileSidebarFirstClicked) {
        this.pageSettings.pageMobileSidebarFirstClicked = false;
      } else {
        this.pageSettings.pageMobileSidebarToggled = false;
      }
    }
  }

  // toggle mobile sidebar
  onToggleMobileSidebar(): void {
    if (this.pageSettings.pageMobileSidebarToggled) {
      this.pageSettings.pageMobileSidebarToggled = false;
    } else {
      this.pageSettings.pageMobileSidebarToggled = true;
      this.pageSettings.pageMobileSidebarFirstClicked = true;
    }
  }

  // hide right mobile sidebar
  onHideMobileRightSidebar(): void {
    if (this.pageSettings.pageMobileRightSidebarToggled) {
      if (this.pageSettings.pageMobileRightSidebarFirstClicked) {
        this.pageSettings.pageMobileRightSidebarFirstClicked = false;
      } else {
        this.pageSettings.pageMobileRightSidebarToggled = false;
      }
    }
  }

  // toggle right mobile sidebar
  onToggleMobileRightSidebar(): void {
    if (this.pageSettings.pageMobileRightSidebarToggled) {
      this.pageSettings.pageMobileRightSidebarToggled = false;
    } else {
      this.pageSettings.pageMobileRightSidebarToggled = true;
      this.pageSettings.pageMobileRightSidebarFirstClicked = true;
    }
  }
}
