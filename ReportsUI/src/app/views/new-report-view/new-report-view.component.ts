import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-new-report-view',
  templateUrl: './new-report-view.component.html',
  styleUrls: ['./new-report-view.component.scss']
})
export class NewReportViewComponent implements OnInit {
  data$: any;
  constructor(private fireBase: AngularFirestore) { }

  ngOnInit(): void {
    this.data$ = this.fireBase.collection('Reports').valueChanges();
  }
}
