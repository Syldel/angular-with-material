import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'images',
    loadChildren: () => import('./pages/images-page/images-page.module').then(m => m.ImagesPageModule)
  },
  {
    path: 'countries',
    loadChildren: () => import('./pages/countries-page/countries-page.module').then(m => m.CountriesPageModule)
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
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
