import { UserDataService } from 'src/app/services/user-data-service.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
//  id$: Observable<String>;
  id: number
  sub: any;
  
  constructor(private route: ActivatedRoute) {
    console.log(this.route.params);
    this.sub = this.route.params.subscribe(params => {
      console.log(params['id'])
      this.id = +params['id']; // (+) converts string 'id' to a number
      console.log(this.id);
    });
      
  }

  ngOnInit(): void {
  }

}
