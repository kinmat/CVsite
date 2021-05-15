import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('form invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('form valid when filled right', () => {
    let username = component.form.controls['username'];
    let email = component.form.controls['email'];
    let password = component.form.controls['password'];
    username.setValue('username');
    email.setValue('email@email.com');
    password.setValue('password');
    expect(component.form.valid).toBeTruthy();
  });
    
  it('email field invalid when pattern is wrong', () => {
    let errors = {};
    let email = component.form.controls['email'];
      email.setValue('email');
    errors = email.errors || {};
    expect(errors['pattern']).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
