import { Routes } from '@angular/router';
import { TestPathComponent } from './test-path/test-path.component';

export const routes: Routes = [
  {
    path: 'test',
    component: TestPathComponent,
    pathMatch: 'full',
  },
];
