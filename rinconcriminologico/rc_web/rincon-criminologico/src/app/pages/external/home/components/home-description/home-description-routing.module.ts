import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDescriptionComponent } from './home-description.component';

const routes: Routes = [
  {
    path: '',
    component: HomeDescriptionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeDescriptionRoutingModule { }
