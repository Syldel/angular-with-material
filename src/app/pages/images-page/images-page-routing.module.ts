import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImagesPageComponent } from './images-page.component';

const routes: Routes = [
  { path: '', component: ImagesPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagesPageRoutingModule { }
