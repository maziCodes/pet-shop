import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/customer/search',
    pathMatch: 'full'
  },
  {
    path: 'customer',
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule),
  },
  {
    path: 'catalogue',
    loadChildren: () => import('./catalogue/catalogue.module').then(m => m.CatalogueModule),
  },
  {
    path: '**',
    redirectTo: '/customer/search'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
