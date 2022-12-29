import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { HomeCoverModule } from './components/home-cover/home-cover.module';
import { HomeDescriptionModule } from './components/home-description/home-description.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    HomeCoverModule,
    HomeDescriptionModule
  ]
})
export class HomeModule { }
