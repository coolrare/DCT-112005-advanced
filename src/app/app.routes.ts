import { Routes } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import { TablesComponent } from './tables/tables.component';

export const routes: Routes = [
  {
    path: 'charts',
    component: ChartsComponent
  },
  {
    path: 'tables',
    component: TablesComponent
  }

];
