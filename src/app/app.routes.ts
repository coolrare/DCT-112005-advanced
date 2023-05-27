import { Routes } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import { TablesComponent } from './tables/tables.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AnimationsComponent } from './utilities/animations/animations.component';
import { BordersComponent } from './utilities/borders/borders.component';
import { OtherComponent } from './utilities/other/other.component';
import { ColorsComponent } from './utilities/colors/colors.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'charts',
    component: ChartsComponent
  },
  {
    path: 'tables',
    component: TablesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'utilities', // utilities/*
    children: [
      {
        path:'',
        redirectTo: 'other',
        pathMatch: 'full'
      },
      {
        path: 'colors',
        component: ColorsComponent
      },
      {
        path: 'animations',
        component: AnimationsComponent
      },
      {
        path: 'borders',
        component: BordersComponent
      },
      {
        path: 'other',
        component: OtherComponent
      }
    ]
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  },

];
