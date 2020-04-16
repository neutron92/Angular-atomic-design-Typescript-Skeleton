import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gabarit-avatar-container',
  templateUrl: './avatar-container.component.html',
  styleUrls: ['./avatar-container.component.scss']
})
export class AvatarContainerComponent implements OnInit {
  @Input() srcUri: string;
  constructor() { }

  ngOnInit(): void {
    console.log('this.srcUri cont', this.srcUri);
  }

}
