import { NgModule } from '@angular/core';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

import { ImageLoaderDirectiveModule } from '../directives/image-loader-directive.module';
import { DeferLoadModule } from '@trademe/ng-defer-load';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    HomePageRoutingModule,
    ImageLoaderDirectiveModule,
    DeferLoadModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule
  ]
})
export class HomePageModule { }
