import { EducationService } from './../../services/education.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Education } from 'src/app/model/education';

@Component({
  selector: 'app-cv-form-education',
  templateUrl: './cv-form-education.component.html',
  styleUrls: ['./cv-form-education.component.css']
})
export class CvFormEducationComponent implements OnInit {
  model: NgbDateStruct;
  edus: Array<Education>=[];
  constructor(private router: Router, private eduService: EducationService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.edus.forEach((u) => {
     this.eduService.addEdu(u).subscribe();
    });
    this.router.navigate(['/fill-form/skills']);
  }

  onSaveWork(edu: Education) {
    this.edus.push(edu);
    console.log(this.edus);
  }
}
