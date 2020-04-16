import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleTemp2Component } from './example-temp2.component';



@NgModule({
  declarations: [ExampleTemp2Component],
  exports: [
    ExampleTemp2Component
  ],
  imports: [
    CommonModule
  ]
})
export class ExampleTemp2Module { }
