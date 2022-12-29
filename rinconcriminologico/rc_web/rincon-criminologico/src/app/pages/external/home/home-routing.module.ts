import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDescriptionModule } from './components/home-description/home-description.module';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'home-cover',
        loadChildren: () => import('./components/home-cover/home-cover.module').then(m => m.HomeCoverModule)
      },
      {
        path: 'home-description',
        loadChildren: () => import('./components/home-description/home-description.module').then(m => HomeDescriptionModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
