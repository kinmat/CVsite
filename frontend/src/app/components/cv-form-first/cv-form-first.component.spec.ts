import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvFormFirstComponent } from './cv-form-first.component';

describe('CvFormFirstComponent', () => {
  let component: CvFormFirstComponent;
  let fixture: ComponentFixture<CvFormFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvFormFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvFormFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
