import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueGalleryComponent } from './catalogue-gallery.component';

describe('CatalogueGalleryComponent', () => {
  let component: CatalogueGalleryComponent;
  let fixture: ComponentFixture<CatalogueGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogueGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogueGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
