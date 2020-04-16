import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleFormRoutingModule } from './example-form-routing.module';
import { ExampleFormComponent } from './example-form.component';


@NgModule({
  declarations: [
    ExampleFormComponent,
  ],
  exports: [
    ExampleFormComponent
  ],
  imports: [
    CommonModule,
    ExampleFormRoutingModule
  ]
})
export class ExampleFormModule { }
