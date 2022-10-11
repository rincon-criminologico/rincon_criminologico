import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForbiddenComponent } from './pages/commons/forbidden/forbidden.component';
import { NotFoundComponent } from './pages/commons/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'externo'
  },
  {
    path: 'externo',
    loadChildren: () => import('./pages/external/external.module').then(m => m.ExternalModule),
    canActivate: []
  },
  {
    path: 'interno',
    loadChildren: () => import('./pages/internal/internal.module').then(m => m.InternalModule),
    // canActivate: [IsAuthGuard]
    canActivate: []
  },
  {
    path: 'no-encontrado',
    component: NotFoundComponent
  },
  {
    path: 'sin-permisos',
    component: ForbiddenComponent
  },
  {
    path: '**',
    redirectTo: 'no-encontrado'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
