import { Language } from './../../model/language';
import { SkillLangService } from './../../services/skill-lang.service';
import { WorkExpService } from 'src/app/services/work-exp.service';
import { WorkExp } from 'src/app/model/work-exp';
import { EducationService } from 'src/app/services/education.service';
import { PersonalInfo } from './../../model/personal-info';
import { PersonalInfoService } from 'src/app/services/personal-info.service';
import { UserDataService } from './../../services/user-data-service.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { User } from 'src/app/model/user';
import { formatDate } from '@angular/common';
import { Education } from 'src/app/model/education';
import { Skill } from 'src/app/model/skill';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User;
  personal: PersonalInfo;
  id: number
  sub: any;
  birthday: string;
  edu: Education[];
  work: WorkExp[];
  langs: Language[];
  skills: Skill[];
  
  
  constructor(private route: ActivatedRoute, private userService: UserDataService,
    private personalService: PersonalInfoService, private eduService: EducationService,
  private workService: WorkExpService, private skillService: SkillLangService) {
    this.user = new User();
    this.personal = new PersonalInfo();
    
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });

    this.userService.getUser(this.id).subscribe(data =>{
      this.user = data;
    })

    this.personalService.getPersonalInfo(this.id).subscribe(data =>{
      this.personal = data;
      this.birthday = formatDate(data.birthdate, 'YYYY-MM-dd', 'en-US');
    })
    
    this.eduService.getEduByUser(this.id).subscribe(data => {
      this.edu = data;
      this.edu.forEach(element => {
        console.log( typeof element.from)
        });
    })

    this.workService.getWorkByUser(this.id).subscribe(data => {
      this.work = data;
    })
    this.skillService.getLangByUser(this.id).subscribe(data => {
      this.langs = data;
    })
    this.skillService.getSkillByUser(this.id).subscribe(data => {
      this.skills = data;
    })
      
  }

  ngOnInit(): void {

  }

}
