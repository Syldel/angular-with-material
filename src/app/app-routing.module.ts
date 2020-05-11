import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact-page/contact-page.module').then(m => m.ContactPageModule)
  },
  {
    path: 'not-found',
    loadChildren: () => import('./not-found-page/not-found-page.module').then(m => m.NotFoundPageModule)
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
