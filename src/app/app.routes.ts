import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CrudComponent } from './pages/crud/crud.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'crud', component: CrudComponent },
];
