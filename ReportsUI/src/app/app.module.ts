import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportsViewComponent } from './views/reports-view/reports-view.component';
import { NewReportViewComponent } from './views/new-report-view/new-report-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { ToolBarComponent } from './toolbar/tool-bar/tool-bar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReportComponent } from './components/report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportsViewComponent,
    NewReportViewComponent,
    ToolBarComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
