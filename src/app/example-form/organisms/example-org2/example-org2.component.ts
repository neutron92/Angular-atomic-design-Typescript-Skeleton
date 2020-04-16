import { Component, OnInit, Input } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'gabarit-example-org2',
  templateUrl: './example-org2.component.html',
  styleUrls: ['./example-org2.component.scss']
})
export class ExampleOrg2Component implements OnInit {
  text: string;
  srcUri: string;
  constructor(private pokeApiService: PokeApiService) {
    this.pokeApiService.getPokemon().subscribe(
      (data: any) => {
        console.log('data', data);
        this.text = data[0].name;
        this.srcUri = data[0].img;
      },
      error => console.error(error)
    );
  }

  ngOnInit(): void {
  }

}
