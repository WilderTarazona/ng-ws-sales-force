import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleCatalogComponent } from './sale-catalog.component';

describe('SaleCatalogComponent', () => {
  let component: SaleCatalogComponent;
  let fixture: ComponentFixture<SaleCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
