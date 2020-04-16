import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DigimonService {

  constructor() { }

  getNames(list: any) {
    return list.map(x => x.name);
  }
}
