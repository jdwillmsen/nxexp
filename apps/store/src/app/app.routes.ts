import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'store-details',
    loadChildren: () =>
      import('@nxexp/store-details').then((m) => m.storeDetailsRoutes),
  },
  {
    path: 'store-list',
    loadChildren: () =>
      import('@nxexp/store-list').then((m) => m.storeListRoutes),
  },
];
