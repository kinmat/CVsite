import { DocxGenerator } from './../docx-generator';
import { Language } from './../../model/language';
import { SkillLangService } from './../../services/skill-lang.service';
import { WorkExpService } from 'src/app/services/work-exp.service';
import { WorkExp } from 'src/app/model/work-exp';
import { EducationService } from 'src/app/services/education.service';
import { PersonalInfo } from './../../model/personal-info';
import { PersonalInfoService } from 'src/app/services/personal-info.service';
import { UserDataService } from './../../services/user-data-service.service';
import { Observable } from 'rxjs';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { User } from 'src/app/model/user';
import { formatDate } from '@angular/common';
import { Education } from 'src/app/model/education';
import { Skill } from 'src/app/model/skill';
import jsPDF from 'jspdf';
import domtoimage from 'dom-to-image';
import { AlignmentType, Document, HeadingLevel, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @ViewChild('htmlData') htmlData:ElementRef;
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


  downloadPDF()
  {

    var node = document.getElementById('htmlData');

    var img;
    var filename=`${this.personal.firstName}_${this.personal.lastName}_CV.pdf`;
    var newImage;

    domtoimage.toPng(node, { bgcolor: '#fff' })

      .then(function(dataUrl) {

        img = new Image();
        img.src = dataUrl;
        newImage = img.src;

        img.onload = function(){

        var pdfWidth = img.width;
        var pdfHeight = img.height;

          // FileSaver.saveAs(dataUrl, 'my-pdfimage.png'); // Save as Image

          var doc;

          if(pdfWidth > pdfHeight)
          {
            doc = new jsPDF('l', 'px', [pdfWidth , pdfHeight]);
          }
          else
          {
            doc = new jsPDF('p', 'px', [pdfWidth , pdfHeight]);
          }


          var width = doc.internal.pageSize.getWidth();
          var height = doc.internal.pageSize.getHeight();


          doc.addImage(newImage, 'PNG',  0, 0, width, height);
          doc.save(filename);

        };


      })
      .catch(function(error) {

       // Error Handling

      });



  }

}

