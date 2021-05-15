import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { Packer } from 'docx';
import { DocxGenerator } from '../customSite/docx-generator';
import { Education } from '../model/education';
import { Language } from '../model/language';
import { PersonalInfo } from '../model/personal-info';
import { Skill } from '../model/skill';
import { User } from '../model/user';
import { WorkExp } from '../model/work-exp';
import { EducationService } from './education.service';
import { PersonalInfoService } from './personal-info.service';
import { SkillLangService } from './skill-lang.service';
import { UserDataService } from './user-data-service.service';
import { WorkExpService } from './work-exp.service';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class ExportService {
  user: User;
  personal: PersonalInfo;
  birthday: string;
  edu: Education[];
  work: WorkExp[];
  langs: Language[];
  skills: Skill[];
  

  constructor(private userService: UserDataService,
    private personalService: PersonalInfoService, private eduService: EducationService,
    private workService: WorkExpService, private skillService: SkillLangService) { }

  exportCV(id: number, type: string) {
    this.userService.getUser(id).subscribe(data => {
      this.user = data;
    })

    this.personalService.getPersonalInfo(id).subscribe(data => {
      this.personal = data;
      this.birthday = formatDate(data.birthdate, 'YYYY-MM-dd', 'en-US');
    })
    
    this.eduService.getEduByUser(id).subscribe(data => {
      this.edu = data;
      this.edu.forEach(element => {
        console.log(typeof element.from)
      });
    })

    this.workService.getWorkByUser(id).subscribe(data => {
      this.work = data;
    })
    this.skillService.getLangByUser(id).subscribe(data => {
      this.langs = data;
    })
    this.skillService.getSkillByUser(id).subscribe(data => {
      this.skills = data;
    })

    if (type == 'DOCX') this.downloadDocx();
  }

  downloadDocx() {
    const documentCreator = new DocxGenerator();
    const doc = documentCreator.create([
      this.user,
      this.personal,
      this.work,
      this.edu,
      this.skills,
      this.langs
    ]);
      // Used to export the file into a .docx file
  Packer.toBlob(doc).then((blob) => {
    // saveAs from FileSaver will download the file
    saveAs(blob, `${this.personal.firstName}_${this.personal.lastName}_CV.docx`);
  });
  }

}
