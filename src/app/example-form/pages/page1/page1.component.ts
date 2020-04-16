import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'gabarit-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('params', this.route.snapshot.queryParams);
  }

  isTemplate1() {
    return this.route.snapshot.queryParams.temp === '1';
  }

  isTemplate2() {
    return this.route.snapshot.queryParams.temp === '2';
  }

  getEditMode() {
    return this.route.snapshot.queryParams.edit === '1';
  }

  readOnlyMod() {
    return this.route.snapshot.queryParams.edit === '0';
  }

}
