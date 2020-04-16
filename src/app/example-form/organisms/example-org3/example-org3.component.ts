import { Component, OnInit, Input } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api.service';
import { DigimonService } from 'src/app/services/digimon.service';

@Component({
  selector: 'gabarit-example-org3',
  templateUrl: './example-org3.component.html',
  styleUrls: ['./example-org3.component.scss']
})
export class ExampleOrg3Component implements OnInit {
  list: string[];
  text: string;
  constructor(private pokeApiService: PokeApiService, private digimon: DigimonService) {
    this.list = [];
    this.text = 'Digimos';
    this.pokeApiService.getPokemons().subscribe(
      (data: any) => {
        console.log('data', data);
        this.list = this.digimon.getNames(data);
      },
      error => console.error(error)
    );
  }

  ngOnInit(): void {

  }

  getDigiLists() {
  }

}
