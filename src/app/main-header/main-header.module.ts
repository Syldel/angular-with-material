import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainHeaderComponent } from './main-header.component';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    MainHeaderComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [
    MainHeaderComponent
  ]
})
export class MainHeaderModule { }
