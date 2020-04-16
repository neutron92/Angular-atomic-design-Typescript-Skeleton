import { Component, OnInit, Input, AfterViewInit, AfterContentInit, OnDestroy, AfterViewChecked, AfterContentChecked, DoCheck } from '@angular/core';

@Component({
  selector: 'gabarit-rich-text',
  templateUrl: './rich-text.component.html',
  styleUrls: ['./rich-text.component.scss']
})
export class RichTextComponent implements OnInit, AfterViewInit, AfterContentInit, OnDestroy, AfterViewChecked, AfterContentChecked, DoCheck {

  @Input() htmlContent: string;

  constructor() { }

  ngOnInit(): void {
    console.log('htmlContent ngOnInit', this.htmlContent);
  }

  ngAfterViewInit(): void {
    console.log('htmlContent ngAfterViewInit', this.htmlContent);
  }

  ngAfterContentInit(): void {
    console.log('htmlContent ngAfterContentInit', this.htmlContent);
  }

  ngOnDestroy(): void {
    console.log('htmlContent ngOnDestroy', this.htmlContent);
  }

  ngAfterViewChecked(): void {
    console.log('htmlContent ngAfterViewChecked', this.htmlContent);
  }

  ngAfterContentChecked(): void {
    console.log('htmlContent ngAfterContentChecked', this.htmlContent);
  }

  ngDoCheck(): void {
    console.log('htmlContent ngDoCheck', this.htmlContent);
  }

 /* ngOnChanges(): void {
    console.log('htmlContent ngAfterContentInit', this.htmlContent);
  }*/

}
