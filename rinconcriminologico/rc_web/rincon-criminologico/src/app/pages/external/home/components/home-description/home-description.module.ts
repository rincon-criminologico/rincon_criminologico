import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeDescriptionRoutingModule } from './home-description-routing.module';
import { HomeDescriptionComponent } from './home-description.component';


@NgModule({
  declarations: [
    HomeDescriptionComponent
  ],
  imports: [
    CommonModule,
    HomeDescriptionRoutingModule
  ],
  exports: [
    HomeDescriptionComponent
  ]
})
export class HomeDescriptionModule { }
