import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExternalComponent } from './external.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    component: ExternalComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExternalRoutingModule { }
