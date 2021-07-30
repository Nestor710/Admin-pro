import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES
  ]
})
export class PagesModule { }
