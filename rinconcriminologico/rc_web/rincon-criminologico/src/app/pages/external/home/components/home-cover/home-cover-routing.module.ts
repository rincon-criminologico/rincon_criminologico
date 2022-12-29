import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCoverComponent } from './home-cover.component';

const routes: Routes = [
  {
    path: '',
    component: HomeCoverComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeCoverRoutingModule { }
