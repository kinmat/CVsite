import { Router } from '@angular/router';
import { ExportService } from './../../services/export.service';
import { ExportOption } from './../../model/export-option';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-export-options',
  templateUrl: './export-options.component.html',
  styleUrls: ['./export-options.component.css']
})
export class ExportOptionsComponent implements OnInit {

  options: ExportOption[] = [];
  constructor(private expService: ExportService, private router: Router) {
    this.options.push({
      type: "PDF",
      img: "assets/img/template1.PNG",
      demoId: 10023
    })
    this.options.push({
      type: "DOCX",
      img: "assets/img/export_docx.PNG",
      demoId: 10023
    })
  }

  ngOnInit(): void {
  }

  downloadDemo(id: number, type: string){
    this.expService.exportCV(id, type);
    if (type == 'PDF') {
      this.router.navigate([`/user/${id}`]);  
    }
  }

}
