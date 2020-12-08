import {Component,OnInit} from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-new-report-view',
  templateUrl: './new-report-view.component.html',
  styleUrls: ['./new-report-view.component.scss']
})
export class NewReportViewComponent implements OnInit {
  reportForm: FormGroup = this.formBuilder.group({
    title: [null, [Validators.required]],
    location:[null,[Validators.required]],
    unit:[null,[Validators.required]],
    desc:[null,[Validators.required]],
    participants:[null,[Validators.required]],
    findings:[null,[Validators.required]],
    conclusion:[null,[Validators.required]]
  });
  date = String(new Date())

  constructor(private formBuilder: FormBuilder
    ) { }

  ngOnInit(
  ): void {
    console.log(this.date)
  }
  submit() {
    console.log(this.reportForm.valid)
    if (!this.reportForm.valid) {
      return;
    }
    console.log(this.reportForm.value);
  }

}
