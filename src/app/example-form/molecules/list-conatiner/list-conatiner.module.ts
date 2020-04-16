import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListConatinerComponent } from './list-conatiner.component';
import { ListModule } from '../../atoms/list/list.module';



@NgModule({
  declarations: [ListConatinerComponent],
  exports: [
    ListConatinerComponent
  ],
  imports: [
    CommonModule,
    ListModule
  ]
})
export class ListConatinerModule { }
