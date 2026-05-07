import { Routes } from '@angular/router';

import { CatalegPageComponent } from './components/cataleg/cataleg-page.component';
import { FormulariCercaComponent } from './components/formulari-cerca/formulari-cerca.component';
import { DetallComponent } from './components/detall/detall.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'cataleg', pathMatch: 'full' },

  { path: 'cataleg', component: CatalegPageComponent },
  { path: 'detall/:id', component: DetallComponent },

  {
    path: 'preferits',
    loadComponent: () =>
      import('./components/preferits/preferits-page.component').then(
        (m) => m.PreferitsPageComponent,
      ),
    canActivate: [authGuard],
  },
  {
    path: 'cerca',
    loadComponent: () =>
      import('./pages/cerca-page/cerca-page.component').then(
        (m) => m.CercaPageComponent,
      ),
  },

  { path: 'login', component: LoginComponent },

  { path: '**', redirectTo: 'cataleg' },
];
