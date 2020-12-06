import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/Operators';

// Service
import { PokemonService } from 'src/app/Services/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.sass']
})
export class PokemonDetailComponent implements OnInit {

  public pokemon: any;
  public evolutions: any[];

  private urlId: number;

  constructor(
    private _pokemonService: PokemonService,
    private _activatedRoute: ActivatedRoute
  ) {
    this.pokemon = {};
    this.evolutions = [];
    this.urlId = this._activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getPokemon();
  }

  /******************** Funciones Propias *************/

  private getPokemon(): void {
    this._pokemonService.getPokemons(this.urlId).pipe(take(1))
    .subscribe(
      (pokemon: any) => {
        this._pokemonService.getBaseUrl(pokemon.species.url).pipe(take(1))
        .subscribe(
          (species: any) => {
            this._pokemonService.getBaseUrl(species.evolution_chain.url).pipe(take(1))
            .subscribe(
              (evolution: any) => {
               this.pokemon = {
                  position: this.urlId,
                  name: pokemon.name,
                  imageAvatar: pokemon.sprites.front_default,
                  image: pokemon.sprites.other.dream_world.front_default,
                  height: pokemon.height,
                  weight: pokemon.weight,
                  abilities: pokemon.abilities,
                  types: pokemon.types,
                  moves: pokemon.moves
                };
                var evoData = evolution.chain;
                do {
                  this.evolutions.push(evoData.species.name);
                  evoData = evoData['evolves_to'][0];
                } while (!!evoData && evoData.hasOwnProperty('evolves_to'));
              },
              err => console.log(err)
            )
          },
          err => console.log(err)
        )
      },
      err => console.log(err)
    )
  }
}
