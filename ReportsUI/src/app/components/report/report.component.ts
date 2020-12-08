import { Component, OnInit, Input } from '@angular/core';

export interface report {
  title?: string;
  data?: string;
  tags?: string[];
  owner?: string;
  date?: Date;
  subTitle?: string;
}
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  @Input() report: report = { title: 'תחקיר בסיסי',
  owner:'אור פרידמן',
  data: 'מאור הזה הוא חתיכת גבר אבל הוא חסם את כל הכרטיסי רשת בצהל והשבית אותנו ובגלל זה הפסדנו את המדינה',
  date: new Date(),
  subTitle: 'asd',
  tags: ['a','b']
  };
  constructor() { 

  }

  ngOnInit() {
  }
  
  edit() {
    console.log('test')
  }
}
