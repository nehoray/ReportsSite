import { Component, OnInit } from '@angular/core';
import { report } from 'src/app/components/report/report.component';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-new-report-view',
  templateUrl: './new-report-view.component.html',
  styleUrls: ['./new-report-view.component.scss']
})
export class NewReportViewComponent implements OnInit {

  constructor(private fireBase: AngularFirestore) { }

  ngOnInit(): void {
    
  }

  report: report = {data: 'hiii or hmele', owner: 'mio', date: new Date(), subTitle:'אחשליי', tags: ['nturkvc'], title:'nnnn'};

}
