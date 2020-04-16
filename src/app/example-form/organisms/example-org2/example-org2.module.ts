import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleOrg2Component } from './example-org2.component';
import { AvatarContainerModule } from '../../molecules/avatar-container/avatar-container.module';
import { LabelConatinerModule } from '../../molecules/label-conatiner/label-conatiner.module';



@NgModule({
  declarations: [ExampleOrg2Component],
  exports: [
    ExampleOrg2Component
  ],
  imports: [
    CommonModule,
    AvatarContainerModule,
    LabelConatinerModule
  ]
})
export class ExampleOrg2Module { }
