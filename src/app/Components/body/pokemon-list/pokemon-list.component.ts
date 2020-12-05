import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/Operators';
import { PokemonService } from 'src/app/Services/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent implements OnInit {

  public pokemons: any[];

  constructor(
    private _pokemonService: PokemonService
  ) {
    this.pokemons = [];
  }

  ngOnInit(): void {
    this.getPokemons();
  }

  /**************************** Funciones propias *********************/

  private getPokemons(): void {
    for (let index = 1; index <= 30; index++) {
      this._pokemonService.getPokemons(index).pipe(take(1))
      .subscribe(
        (pokemon: any) => {
          let pokemonStructure = {
            id: index,
            name: pokemon.name,
            height: pokemon.height,
            weight: pokemon.weight
          };
          this.pokemons.push(pokemonStructure);
        },
        err => console.log(err)
      );
    };
    console.log('Pokemons:', this.pokemons);
  }

}
