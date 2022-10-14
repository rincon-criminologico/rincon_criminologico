import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExternalRoutingModule } from './external-routing.module';
import { ExternalComponent } from './external.component';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    ExternalComponent
  ],
  imports: [
    CommonModule,
    ExternalRoutingModule,
    HomeModule
  ]
})
export class ExternalModule { }
