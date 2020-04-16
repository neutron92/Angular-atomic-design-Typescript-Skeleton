import { Component, OnInit, Input } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'gabarit-example-org',
  templateUrl: './example-org.component.html',
  styleUrls: ['./example-org.component.scss']
})
export class ExampleOrgComponent implements OnInit {
 textname: string;
 textDescription: string;
 textbutton: string;
  constructor(private pokeApiService: PokeApiService) {
    this.textbutton = 'nothing :p!';
    this.pokeApiService.getPokemon().subscribe(
      (data: any) => {
        console.log('data', data);
        this.textname = data[0].name;
        this.textDescription = data[0].level;
      },
      error => console.error(error)
    );
  }

  ngOnInit(): void {
  }

}
