import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetentionConsultantsComponent } from './retention-consultants.component';

describe('RetentionConsultantsComponent', () => {
  let component: RetentionConsultantsComponent;
  let fixture: ComponentFixture<RetentionConsultantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetentionConsultantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetentionConsultantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
