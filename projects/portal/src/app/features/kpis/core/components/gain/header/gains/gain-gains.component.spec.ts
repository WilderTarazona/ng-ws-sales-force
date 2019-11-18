import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GainGainsComponent } from './gain-gains.component';

describe('GainGainsComponent', () => {
  let component: GainGainsComponent;
  let fixture: ComponentFixture<GainGainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GainGainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GainGainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
