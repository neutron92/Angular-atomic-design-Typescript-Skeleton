import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'gabarit-example-temp',
  templateUrl: './example-temp.component.html',
  styleUrls: ['./example-temp.component.scss']
})
export class ExampleTempComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('params temp', this.route.snapshot.queryParams);
  }



}
