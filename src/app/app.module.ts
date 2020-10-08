// Core Module
import { BrowserAnimationsModule }               from '@angular/platform-browser/animations';
import { BrowserModule, Title }                  from '@angular/platform-browser';
import { AppRoutingModule }                      from './app-routing.module';
import { NgModule }                              from '@angular/core';

// Main Component
import { AppComponent }                    from './app.component';

// Form
import { ApiService } from './core/services/api.service';
import { AuthGuard } from './core/guards/auth.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor, JwtModule } from '@auth0/angular-jwt';
import { ErrorInterceptor } from './core/services/error.interceptor.service';
import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    LayoutModule,
    SharedModule.forRoot(),
    AppRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => "token",
        // whitelistedDomains: ["example.com"],
        // blacklistedRoutes: ["example.com/examplebadroute/"],
      },
    }),
  ],
  providers: [
    ApiService,
    AuthGuard,
    Title,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
