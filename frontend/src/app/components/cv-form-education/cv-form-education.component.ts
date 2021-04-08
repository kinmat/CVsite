import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cv-form-education',
  templateUrl: './cv-form-education.component.html',
  styleUrls: ['./cv-form-education.component.css']
})
export class CvFormEducationComponent implements OnInit {
  model: NgbDateStruct;

  constructor(private route: ActivatedRoute,
    private router: Router) { }
  
   ngOnInit(): void {
  }
  
  onSubmit() {
      this.router.navigate(['/fill-form/skills']);   
  }
}
