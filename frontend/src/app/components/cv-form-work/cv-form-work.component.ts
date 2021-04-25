import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { WorkExpService } from 'src/app/services/work-exp.service';
import { WorkExp } from 'src/app/model/work-exp';

@Component({
  selector: 'app-cv-form-work',
  templateUrl: './cv-form-work.component.html',
  styleUrls: ['./cv-form-work.component.css']
})
export class CvFormWorkComponent implements OnInit {
  model: NgbDateStruct;
  works: Array<WorkExp>=[];
  constructor(private router: Router, private workService: WorkExpService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.works.forEach((w) => {
      this.workService.addWork(w).subscribe();
    });
    this.router.navigate(['/fill-form/education']);
  }

  onSaveWork(work: WorkExp) {
    this.works.push(work);
    console.log(this.works);
  }

}
