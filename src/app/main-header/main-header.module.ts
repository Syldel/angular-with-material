import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainHeaderComponent } from './main-header.component';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    MainHeaderComponent
  ],
  imports: [
    RouterModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [
    MainHeaderComponent
  ]
})
export class MainHeaderModule { }
