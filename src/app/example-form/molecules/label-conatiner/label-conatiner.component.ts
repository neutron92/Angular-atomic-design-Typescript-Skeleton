import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gabarit-label-conatiner',
  templateUrl: './label-conatiner.component.html',
  styleUrls: ['./label-conatiner.component.scss']
})
export class LabelConatinerComponent implements OnInit {
  @Input() text: string;
  constructor() { }

  ngOnInit(): void {
  }

}
