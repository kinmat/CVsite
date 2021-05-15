import { UserDataService } from 'src/app/services/user-data-service.service';
import { SkillLangService } from './../../services/skill-lang.service';
import { Language } from './../../model/language';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SliderComponent } from 'ngx-bootstrap-slider';
import { Skill } from 'src/app/model/skill';


@Component({
  selector: 'app-cv-form-skills',
  templateUrl: './cv-form-skills.component.html',
  styleUrls: ['./cv-form-skills.component.css']
})
export class CvFormSkillsComponent implements OnInit {
  langs: Array<Language> = [];
  currentLang: Language;
  currentSkill : Skill;
  skills: Array<Skill> = [];
  userId: number;

  constructor(private userService: UserDataService, private router: Router, private skillService: SkillLangService) { 
    this.userId=this.userService.currentUser.id
    this.resetLang();
    this.resetSkill();
    }
  
   ngOnInit(): void {
  }
  
  onSubmit() {

    this.langs.forEach((l) => {
      this.skillService.addLang(l).subscribe();
    });

    this.skills.forEach((s) => {
     this.skillService.addSkill(s).subscribe();
    });
      this.router.navigate([`/user/${this.userId}`]);   
  }

  onSaveLang() {
    this.langs.push(this.currentLang);
    console.log(this.langs);
    this.resetLang();
  }

  resetLang() {
    this.currentLang = new Language();
    this.currentLang.level = '';
    this.currentLang.userId = this.userId;
    
  }

  deleteLang(language) {
    this.langs = this.langs.filter(function(item) {
      return item != language;
  })
  }

  onSaveSkill() {
    this.skills.push(this.currentSkill);
    console.log(this.skills);
    this.resetSkill();
  }

  resetSkill() {
    this.currentSkill = new Skill();
    this.currentSkill.level = 5;
    this.currentSkill.userId = this.userId;
  }

  deleteSkill(s) {
    this.skills = this.skills.filter(function(item) {
      return item != s;
  })
  }

}
