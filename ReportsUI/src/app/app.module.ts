import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportsViewComponent } from './views/reports-view/reports-view.component';
import { NewReportViewComponent } from './views/new-report-view/new-report-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportsViewComponent,
    NewReportViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
