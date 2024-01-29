import { Route } from '@angular/router';
import { dashboardRoutes } from '@jdw/dashboard';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    children: dashboardRoutes
  }
];
