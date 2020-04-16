import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleTempComponent } from './example-temp.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    ExampleTempComponent
  ],
  exports: [
    ExampleTempComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ]
})
export class ExampleTempModule { }
