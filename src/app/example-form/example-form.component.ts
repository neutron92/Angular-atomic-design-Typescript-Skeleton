import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../services/poke-api.service';

@Component({
  selector: 'gabarit-example-form',
  templateUrl: './example-form.component.html',
  styleUrls: ['./example-form.component.scss']
})
export class ExampleFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
