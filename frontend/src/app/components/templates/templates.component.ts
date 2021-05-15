import { Component, OnInit } from '@angular/core';
import { Template } from 'src/app/model/template';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {

  templates: Template[]= [];

  constructor() {
    this.templates.push({
      name: "Template 1",
      img: "assets/img/template1.PNG",
      demoId: 10023
    })
  }

  ngOnInit(): void {
  }



}
