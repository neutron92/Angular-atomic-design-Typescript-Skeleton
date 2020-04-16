import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})


export class PokeApiService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  getPokemons() {
     return this.http.get(this.configService.getConfig().apiUri);
  }
  getPokemon() {
    return this.http.get(this.configService.getConfig().apiUri + '/name/agumon');
 }
}
