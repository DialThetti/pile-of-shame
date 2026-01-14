import { Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { SystemPageComponent } from './pages/system-page/system-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
  },
  {
    path: 'systems/:id',
    component: SystemPageComponent,
  },
  {
    path: 'settings',
    component: SettingsPageComponent,
  },
];
