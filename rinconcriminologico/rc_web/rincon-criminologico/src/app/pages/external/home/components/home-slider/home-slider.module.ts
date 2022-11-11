import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeSliderRoutingModule } from './home-slider-routing.module';
import { HomeSliderComponent } from './home-slider.component';


@NgModule({
  declarations: [
    HomeSliderComponent
  ],
  imports: [
    CommonModule,
    HomeSliderRoutingModule
  ],
  exports: [
    HomeSliderComponent
  ]
})
export class HomeSliderModule { }
