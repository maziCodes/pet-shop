import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CatalogueGalleryComponent} from "./catalogue-gallery/catalogue-gallery.component";

const routes: Routes = [
  {
    path: 'gallery',
    component: CatalogueGalleryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogueRoutingModule { }
