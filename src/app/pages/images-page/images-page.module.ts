import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeferLoadModule } from '@trademe/ng-defer-load';
import { ImageLoaderDirectiveModule } from '../../directives/image-loader-directive.module';

import { ImagesPageRoutingModule } from './images-page-routing.module';
import { ImagesPageComponent } from './images-page.component';

@NgModule({
  declarations: [
    ImagesPageComponent
  ],
  imports: [
    CommonModule,
    ImagesPageRoutingModule,
    DeferLoadModule,
    ImageLoaderDirectiveModule
  ]
})
export class ImagesPageModule { }
