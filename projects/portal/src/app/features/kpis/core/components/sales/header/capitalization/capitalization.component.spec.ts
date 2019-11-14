import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalizationComponent } from './capitalization.component';

describe('CapitalizationComponent', () => {
  let component: CapitalizationComponent;
  let fixture: ComponentFixture<CapitalizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapitalizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
