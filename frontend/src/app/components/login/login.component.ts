import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserDataService } from 'src/app/services/user-data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: User[];
  user: User;

  constructor(private userService: UserDataService,private route: ActivatedRoute,
    private router: Router,) {
      this.user = new User()
      
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }

  onSubmit() {
    const loginUser = this.findUser();
    console.log(this.user);
    console.log(loginUser);
    if (loginUser != null) {
      this.userService.changeLoggedInUser(loginUser);
      this.router.navigate(['/profile']);
    }
  }

  findUser() {
    for (var u of this.users) {
      console.log(u);
      if (u.username === this.user.username)
        if (u.password === this.user.password)
          return u; 
    }
    return null;
  }

}
