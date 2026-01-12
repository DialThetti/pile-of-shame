import { Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { SystemPageComponent } from './pages/system-page/system-page.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
  },
  {
    path: 'systems/:id',
    component: SystemPageComponent,
  },
];
