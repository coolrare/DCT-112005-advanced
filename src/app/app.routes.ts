import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'charts',
        // component: ChartsComponent
        loadComponent: () =>
          import('./charts/charts.component').then((c) => c.ChartsComponent),
      },
      {
        path: 'tables',
        loadComponent: () =>
          import('./tables/tables.component').then((t) => t.TablesComponent),
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component'),
      },
      {
        path: 'utilities', // utilities/*
        loadChildren: () => import('./utilities/utilities.routes'),
      },
      {
        path: 'demo',
        loadComponent: () =>
          import('./demo/demo.component').then((d) => d.DemoComponent),
      },
      {
        path: 'not-found',
        loadComponent: () =>
          import('./not-found/not-found.component').then(
            (n) => n.NotFoundComponent
          ),
      },
    ]
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then((l) => l.LoginComponent),
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full',
  },
];
