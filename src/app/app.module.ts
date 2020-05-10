import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MainHeaderModule } from './main-header/main-header.module';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

/* Pages */
import { HomePageModule } from './home-page/home-page.module';
import { ContactPageModule } from './contact-page/contact-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainHeaderModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    HomePageModule,
    ContactPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
