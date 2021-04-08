import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserDataService } from 'src/app/services/user-data-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserDataService) {
    this.user = new User();
  }

  onSubmit() {
    this.userService.addUser(this.user).subscribe(result => this.gotoUserList());
  }

  gotoProfilePage() {
    this.router.navigate(['/profile']);
  }

  gotoUserList() {
    this.router.navigate(['/users']);

  }
}
