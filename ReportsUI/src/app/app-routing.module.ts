import { NgModule} from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { ReportsViewComponent } from './views/reports-view/reports-view.component'

const routes: Routes = [{ path: 'new', component: ReportsViewComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
