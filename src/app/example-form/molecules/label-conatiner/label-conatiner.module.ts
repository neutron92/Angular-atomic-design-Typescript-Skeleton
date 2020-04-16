import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelConatinerComponent } from './label-conatiner.component';
import { LabelModule } from '../../atoms/label/label.module';



@NgModule({
  declarations: [
    LabelConatinerComponent
  ],
  exports: [
    LabelConatinerComponent
  ],
  imports: [
    CommonModule,
    LabelModule
  ]
})
export class LabelConatinerModule { }
