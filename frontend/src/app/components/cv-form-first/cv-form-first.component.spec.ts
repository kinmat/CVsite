import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CvFormFirstComponent } from './cv-form-first.component';
import { FormsModule } from '@angular/forms';

describe('CvFormFirstComponent', () => {
  let component: CvFormFirstComponent;
  let fixture: ComponentFixture<CvFormFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ 
      declarations: [CvFormFirstComponent],
      imports: [HttpClientModule, RouterTestingModule,FormsModule, NgbModule],
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
