import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {EditClaimComponent} from './edit-claim.component';

describe('EditClaimComponent', () => {
  let component: EditClaimComponent;
  let fixture: ComponentFixture<EditClaimComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EditClaimComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
