import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserDataService } from 'src/app/services/user-data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User;
  combinationNotValid: boolean;
  form: FormGroup;

  constructor(
    private userService: UserDataService, private router: Router, private builder: FormBuilder) {
    this.user = new User();
    this.combinationNotValid = false;

  }

  ngOnInit() {
    this.form = this.builder.group({
    username: ['', [
      Validators.required]],
    password: ['', [
      Validators.required]],
  });}

  onSubmit() {
    this.userService.getUserByUsername(this.user.username).subscribe((data) => {
      if (data == null) this.wrongUserReset();
      else if (this.checkUser(data)) {
        this.combinationNotValid = false;
        this.userService.changeCurrentUser(data)
        this.router.navigate(['/profile']);
      }
    });
  }

  checkUser(data: User) {
    if (this.user.password == data.password) return true;
    this.wrongUserReset();
    return false;
  }

  wrongUserReset() {
    this.combinationNotValid = true;
    this.user = new User();
  }

}
