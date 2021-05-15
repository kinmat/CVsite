import { ExportService } from './../../services/export.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserDataService } from 'src/app/services/user-data-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  messages: any[] = [];

  constructor(private userService: UserDataService, private router: Router, private expService: ExportService) {
    this.user = new User();

    
  }

  ngOnInit() {
    this.user = this.userService.currentUser;
  }


  goToWebsite() {
    this.router.navigate([`/user/${this.user.id}`]);  
  }

  downloadCV(type: string) {
    this.expService.exportCV(this.user.id, type);
  }

  deleteUser() {
    this.userService.deleteUser(this.user.id).subscribe();
    this.router.navigate([`/login`]);
    this.userService.changeCurrentUser(undefined)
  }

}
