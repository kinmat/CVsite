import { Router } from '@angular/router';
import { UserDataService } from './../../services/user-data-service.service';
import { Component } from '@angular/core';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navibar',
  templateUrl: './navibar.component.html',
  styleUrls: ['./navibar.component.css']
})
export class NavibarComponent{

  userLoggedIn: boolean

  constructor(private userService: UserDataService, private router: Router) {
     userService.loggedInUser.subscribe(data => {
       if (data) this.userLoggedIn = true;
       else this.userLoggedIn = false;
     })
  }

  logout() {
    console.log(this.userLoggedIn)
    this.userService.changeCurrentUser(undefined);
    this.router.navigate(['/login']);
    console.log(this.userLoggedIn)
  }

}
