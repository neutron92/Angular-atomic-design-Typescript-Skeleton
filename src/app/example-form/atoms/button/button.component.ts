import { Component, OnInit, Input, AfterViewInit, AfterContentInit, OnDestroy, AfterViewChecked, AfterContentChecked, DoCheck } from '@angular/core';

@Component({
  selector: 'gabarit-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, AfterViewInit, AfterContentInit, OnDestroy, AfterViewChecked, AfterContentChecked, DoCheck {

  @Input() text: string;

  constructor() {
    console.log('text constructor', this.text);
  }

  ngOnInit(): void {
    console.log('text ngOnInit', this.text);
  }

  ngAfterViewInit(): void {
    console.log('text ngAfterViewInit', this.text);
  }

  ngAfterContentInit(): void {
    console.log('text ngAfterContentInit', this.text);
  }

  ngOnDestroy(): void {
    console.log('text ngOnDestroy', this.text);
  }

  ngAfterViewChecked(): void {
    console.log('text ngAfterViewChecked', this.text);
  }

  ngAfterContentChecked(): void {
    console.log('text ngAfterContentChecked', this.text);
  }

  ngDoCheck(): void {
    console.log('text ngDoCheck', this.text);
  }

 /* ngOnChanges(): void {
    console.log('text ngAfterContentInit', this.text);
  }*/

}
