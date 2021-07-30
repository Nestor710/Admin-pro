import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from '../shared/graficas1/graficas1.component';


const PagesRoute: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
          { path: 'dash', component:DashboardComponent },
          { path: 'progress', component: ProgressComponent },
          { path: 'graficas1', component: Graficas1Component },
          { path:'', redirectTo:'/dash', pathMatch: 'full' }
        ]
    }
]

export const PAGES_ROUTES = RouterModule.forChild(PagesRoute); 