import { Component, OnInit, Input, AfterViewInit, AfterContentInit, OnDestroy, AfterViewChecked, AfterContentChecked, DoCheck } from '@angular/core';

@Component({
  selector: 'gabarit-avatar-comp',
  templateUrl: './avatar-comp.component.html',
  styleUrls: ['./avatar-comp.component.scss']
})
export class AvatarCompComponent implements OnInit, AfterViewInit, AfterContentInit, OnDestroy, AfterViewChecked, AfterContentChecked, DoCheck {

  @Input() srcUri: string;

  constructor() { }

  ngOnInit(): void {
    console.log('srcUri ngOnInit', this.srcUri);
  }

  ngAfterViewInit(): void {
    console.log('srcUri ngAfterViewInit', this.srcUri);
    if (!this.srcUri) {
      this.srcUri = 'https://dummyimage.com/600x1003/000/fff';
    }
  }

  ngAfterContentInit(): void {
    console.log('srcUri ngAfterContentInit', this.srcUri);
  }

  ngOnDestroy(): void {
    console.log('srcUri ngOnDestroy', this.srcUri);
  }

  ngAfterViewChecked(): void {
    console.log('srcUri ngAfterViewChecked', this.srcUri);
  }

  ngAfterContentChecked(): void {
    console.log('srcUri ngAfterContentChecked', this.srcUri);
  }

  ngDoCheck(): void {
    console.log('srcUri ngDoCheck', this.srcUri);
  }

 /* ngOnChanges(): void {
    console.log('srcUri ngAfterContentInit', this.srcUri);
  }*/

}
