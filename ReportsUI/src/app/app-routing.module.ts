import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {NewReportViewComponent} from "./views/new-report-view/new-report-view.component";

const routes: Routes = [{ path: 'new', component: NewReportViewComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
