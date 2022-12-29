import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeCoverRoutingModule } from './home-cover-routing.module';
import { HomeCoverComponent } from './home-cover.component';


@NgModule({
  declarations: [
    HomeCoverComponent
  ],
  imports: [
    CommonModule,
    HomeCoverRoutingModule
  ],
  exports: [
    HomeCoverComponent
  ]
})
export class HomeCoverModule { }
