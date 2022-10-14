import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FooterModule } from "../commons/footer/footer.module";
import { HeaderModule } from "../commons/header/header.module";

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      HeaderModule,
      FooterModule
    ],
    exports: [
      FormsModule,
      ReactiveFormsModule,
      HeaderModule,
      FooterModule
    ],
    providers: [],
    schemas: []
  })
  export class SharedModule { }