import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { ErrorComponent } from './error/error.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [AppComponent, ErrorComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    AuthModule,
    RouterModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
