import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { ButtonModule } from '../../atoms/button/button.module';
import { TextModule } from '../../atoms/text/text.module';
import { RichTextModule } from '../../atoms/rich-text/rich-text.module';



@NgModule({
  declarations: [
    FormComponent
  ],
  exports: [
    FormComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    TextModule,
    RichTextModule
  ]
})
export class FormModule { }
