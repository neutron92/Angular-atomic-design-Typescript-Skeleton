import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleOrg3Component } from './example-org3.component';
import { ListConatinerModule } from '../../molecules/list-conatiner/list-conatiner.module';
import { LabelConatinerModule } from '../../molecules/label-conatiner/label-conatiner.module';


@NgModule({
  declarations: [ExampleOrg3Component],
  exports: [
    ExampleOrg3Component
  ],
  imports: [
    CommonModule,
    ListConatinerModule,
    LabelConatinerModule
  ]
})
export class ExampleOrg3Module { }
