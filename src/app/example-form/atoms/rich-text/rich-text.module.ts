import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RichTextComponent } from './rich-text.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [RichTextComponent],
  exports: [
    RichTextComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularEditorModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RichTextModule { }
