import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarCompComponent } from './avatar-comp.component';
import { AvatarModule } from 'ngx-avatar';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AvatarCompComponent],
  exports: [
    AvatarCompComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AvatarModule
  ]
})
export class AvatarCompModule { }
