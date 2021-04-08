import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cv-form-skills',
  templateUrl: './cv-form-skills.component.html',
  styleUrls: ['./cv-form-skills.component.css']
})
export class CvFormSkillsComponent implements OnInit {
  model: NgbDateStruct;

  constructor(private route: ActivatedRoute,
    private router: Router) { }
  
   ngOnInit(): void {
  }
  
  onSubmit() {
      this.router.navigate(['/fill-form/skills']);   
  }

}
