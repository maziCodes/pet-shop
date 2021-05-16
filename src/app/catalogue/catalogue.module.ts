import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CatalogueGalleryComponent } from './catalogue-gallery/catalogue-gallery.component';


@NgModule({
  declarations: [CatalogueGalleryComponent],
  imports: [
    CommonModule,
    CatalogueRoutingModule
  ]
})
export class CatalogueModule { }
