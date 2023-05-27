import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'other',
    pathMatch: 'full',
  },
  {
    path: 'colors',
    loadComponent: () =>
      import('./colors/colors.component').then((c) => c.ColorsComponent),
  },
  {
    path: 'colors/:type', // colors/(.), 如果是 colors/ 比對不會成功
    loadComponent: () =>
      import('./colors/colors.component').then((c) => c.ColorsComponent),
  },
  {
    path: 'animations',
    loadComponent: () =>
      import('./animations/animations.component').then(
        (a) => a.AnimationsComponent
      ),
  },
  {
    path: 'animations/:type',
    loadComponent: () =>
      import('./animations/animations.component').then(
        (a) => a.AnimationsComponent
      ),
  },
  {
    path: 'borders',
    loadComponent: () =>
      import('./borders/borders.component').then((b) => b.BordersComponent),
  },
  {
    path: 'other',
    loadComponent: () =>
      import('./other/other.component').then((o) => o.OtherComponent),
  },
];
export default routes;
