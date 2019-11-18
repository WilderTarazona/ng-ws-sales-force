import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetentionRetentionsComponent } from './retention-retentions.component';

describe('RetentionRetentionsComponent', () => {
  let component: RetentionRetentionsComponent;
  let fixture: ComponentFixture<RetentionRetentionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetentionRetentionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetentionRetentionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
