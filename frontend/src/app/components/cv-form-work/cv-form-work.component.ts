
import { WorkExperienceComponent } from './../work-experience/work-experience.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DynamicComponent } from '../dynamic/dynamic.component';
import { WorkExpService } from 'src/app/services/work-exp.service';
import { WorkExp } from 'src/app/model/work-exp';

@Component({
  selector: 'app-cv-form-work',
  templateUrl: './cv-form-work.component.html',
  styleUrls: ['./cv-form-work.component.css']
})
export class CvFormWorkComponent implements OnInit {
  model: NgbDateStruct;
  constructor(private router: Router, private workService: WorkExpService) { }

  ngOnInit(): void {
  }

  public elements: Array<WorkExperienceComponent>=[];
  public WidgetClasses = {
     'WorkExperience': WorkExperienceComponent,     
  }
  
 @ViewChild(DynamicComponent) dynamicComponent:DynamicComponent;  
 
  addComponent(widget: string ): void{                         
    let ref= this.dynamicComponent.addComponent(this.WidgetClasses[widget]);    
    this.elements.push(ref); 
    console.log(this.elements);
 
    this.dynamicComponent.resetContainer();                     
 }
 
  workDeepcopy(w: WorkExp) {
    let work = new WorkExp();
    work.userId = w.userId;
    work.position = w.position;
    work.employer = w.employer;
    work.city = w.city;
    work.country = w.country;
    work.description = w.description;
    work.ongoing = w.ongoing;
    return work;
  }

  onSubmit() {

    this.elements.forEach((comp) => {
    //  let work = this.workDeepcopy(comp.getWork());
    //  console.log(comp.getWork());
    //  this.workService.addWork(comp.work).subscribe();
    });

    this.router.navigate(['/fill-form/education']);
  }

}
