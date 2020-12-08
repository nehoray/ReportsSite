import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-reports-view',
  templateUrl: './reports-view.component.html',
  styleUrls: ['./reports-view.component.scss']
})
export class ReportsViewComponent implements OnInit {
  data$: any;
  constructor(private fireBase: AngularFirestore) { }

  ngOnInit(): void {
    this.data$ = this.fireBase.collection('Reports').valueChanges();
  }
}
