import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserDataService } from 'src/app/services/user-data-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor(private userService: UserDataService) {
  }

  ngOnInit() {
    console.log(this.userService.loggedInUser);
    this.user = this.userService.loggedInUser;
    console.log(this.user);
  }

}
