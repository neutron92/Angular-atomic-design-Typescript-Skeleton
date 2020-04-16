import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleOrgComponent } from './example-org.component';
import { FormModule } from '../../molecules/form/form.module';
import { LabelConatinerModule } from '../../molecules/label-conatiner/label-conatiner.module';



@NgModule({
  declarations: [
    ExampleOrgComponent
  ],
  exports: [
    ExampleOrgComponent
  ],
  imports: [
    CommonModule,
    FormModule,
    LabelConatinerModule
  ]
})
export class ExampleOrgModule { }
