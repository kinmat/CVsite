import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvFormWorkComponent } from './cv-form-work.component';

describe('CvFormWorkComponent', () => {
  let component: CvFormWorkComponent;
  let fixture: ComponentFixture<CvFormWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvFormWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvFormWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
