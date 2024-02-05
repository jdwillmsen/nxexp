import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'register',
    loadChildren: () =>
      import('@nxexp/medium-clone-feature-register').then(
        (m) => m.mediumCloneFeatureRegisterRoutes
      ),
  },
];
