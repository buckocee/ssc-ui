import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {ClaimDetailsComponent} from './claim-details.component';

describe('ClaimDetailsComponent', () => {
  let component: ClaimDetailsComponent;
  let fixture: ComponentFixture<ClaimDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ClaimDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
