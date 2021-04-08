import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvFormEducationComponent } from './cv-form-education.component';

describe('CvFormEducationComponent', () => {
  let component: CvFormEducationComponent;
  let fixture: ComponentFixture<CvFormEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvFormEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvFormEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
