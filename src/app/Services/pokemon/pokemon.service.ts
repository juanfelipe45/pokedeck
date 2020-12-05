import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Services
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url: string;

  constructor(private _httpService: HttpService) { }

  /******************** Funciones ******************/

  getPokemons(index: number): Observable<any> {
    this.url = `pokemon/${index}`;
    return this._httpService.httpGet(this.url);
  }
}
