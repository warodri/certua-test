import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { GlobalHttpInterceptorService } from './shared/services/global-http-Interceptor.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, SharedModule, HttpClientModule],
  providers: [
      {
          provide: HTTP_INTERCEPTORS,
          useClass: GlobalHttpInterceptorService,
          multi: true /** Inside 'GlobalHttpInterceptorService' we can have multipe interceptors for 'HTTP_INTERCEPTORS' */
      }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
