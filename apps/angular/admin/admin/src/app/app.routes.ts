import { Route } from '@angular/router';
import { dashboardRoutes } from '@jdw/dashboard';

export const appRoutes: Route[] = [
  {
    path: 'dashboard',
    children: dashboardRoutes,
  },
];
