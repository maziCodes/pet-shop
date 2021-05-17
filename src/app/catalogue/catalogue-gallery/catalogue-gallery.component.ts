import { Component, OnInit } from '@angular/core';
import {PageManagerService} from "../../services/page-manager.service";

@Component({
  selector: 'app-catalogue-gallery',
  templateUrl: './catalogue-gallery.component.html',
  styleUrls: ['./catalogue-gallery.component.scss']
})
export class CatalogueGalleryComponent implements OnInit {

  constructor(
    private pageManagerService: PageManagerService
) { }

  ngOnInit(): void {
    this.pageManagerService.title = 'Items';

  }

}
