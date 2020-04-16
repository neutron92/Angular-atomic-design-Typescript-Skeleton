import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gabarit-list-conatiner',
  templateUrl: './list-conatiner.component.html',
  styleUrls: ['./list-conatiner.component.scss']
})
export class ListConatinerComponent implements OnInit {
  @Input() list: any[];

  constructor() { }

  ngOnInit(): void {
    console.log('this.list cont', this.list);
  }

}
