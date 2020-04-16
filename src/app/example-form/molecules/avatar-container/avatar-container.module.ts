import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarContainerComponent } from './avatar-container.component';
import { AvatarCompModule } from '../../atoms/avatar-comp/avatar-comp.module';



@NgModule({
  declarations: [AvatarContainerComponent],
  exports: [
    AvatarContainerComponent
  ],
  imports: [
    CommonModule,
    AvatarCompModule
  ]
})
export class AvatarContainerModule { }
