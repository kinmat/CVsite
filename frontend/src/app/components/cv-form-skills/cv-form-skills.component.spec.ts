import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvFormSkillsComponent } from './cv-form-skills.component';

describe('CvFormSkillsComponent', () => {
  let component: CvFormSkillsComponent;
  let fixture: ComponentFixture<CvFormSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvFormSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvFormSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
