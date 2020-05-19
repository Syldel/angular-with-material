import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountriesPageComponent } from './countries-page.component';
import { CountriesComponentResolverService } from './countries-component-resolver.service';

const routes: Routes = [
  { path: '', component: CountriesPageComponent, resolve: {response: CountriesComponentResolverService} },
  { path: ':id', component: CountriesPageComponent, resolve: {response: CountriesComponentResolverService} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesPageRoutingModule { }
