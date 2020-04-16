import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gabarit-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() textname: string;
  @Input() textDescription: string;
  @Input() textbutton: string;

  constructor() { }

  ngOnInit(): void {
  }

}
