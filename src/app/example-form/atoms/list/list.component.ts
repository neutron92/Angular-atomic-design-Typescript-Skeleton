import { Component, OnInit, Input, AfterViewInit, AfterContentInit, OnDestroy, AfterViewChecked, AfterContentChecked, DoCheck } from '@angular/core';

@Component({
  selector: 'gabarit-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterViewInit, AfterContentInit, OnDestroy, AfterViewChecked, AfterContentChecked, DoCheck {

  @Input() list: any[];

  constructor() { }

  ngOnInit(): void {
    console.log('list ngOnInit', this.list);
  }

  ngAfterViewInit(): void {
    console.log('list ngAfterViewInit', this.list);
  }

  ngAfterContentInit(): void {
    console.log('list ngAfterContentInit', this.list);
  }

  ngOnDestroy(): void {
    console.log('list ngOnDestroy', this.list);
  }

  ngAfterViewChecked(): void {
    console.log('list ngAfterViewChecked', this.list);
  }

  ngAfterContentChecked(): void {
    console.log('list ngAfterContentChecked', this.list);
  }

  ngDoCheck(): void {
    console.log('list ngDoCheck', this.list);
  }

  /* ngOnChanges(): void {
     console.log('list ngAfterContentInit', this.list);
   }*/

}
