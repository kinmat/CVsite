import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserDataService } from 'src/app/services/user-data-service.service';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private userService: UserDataService) {
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
    console.log(this.users);
  }
}