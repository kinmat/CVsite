import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserDataService } from 'src/app/services/user-data-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user: User;
  isUsernameNOTValid: boolean;
  form: FormGroup;

  constructor(private router: Router, private userService: UserDataService,
    private builder: FormBuilder) {
    this.user = new User();
    this.isUsernameNOTValid = false;
  }


  ngOnInit() {
    this.form = this.builder.group({
    username: ['', [
        Validators.required]],
    email: ['', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")]],
    password: ['', [
      Validators.required]],
  });}

  onSubmit() {
    if (!this.checkUsernameExists()) {
      this.isUsernameNOTValid = false;
      this.userService.addUser(this.user).subscribe((result) => {
        this.userService.changeCurrentUser(result)
        this.gotoProfilePage();
      });
    } else {
      this.isUsernameNOTValid = true;
    }
  }

  checkUsernameExists() {
    let exists: boolean = false;
    console.log(this.user.username)
    this.userService.getUserByUsername(this.user.username).subscribe((data) => {
      if (data == null) exists = true;
      else exists = false;
    });
    return exists;
  }

  gotoProfilePage() {
    this.router.navigate(['/profile']);
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }
}
