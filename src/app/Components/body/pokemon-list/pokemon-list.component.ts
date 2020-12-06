import { take } from 'rxjs/Operators';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

// Services
import { PokemonService } from 'src/app/Services/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent implements OnInit {

  public pokemons: any[];
  public displayedColumns: string[];
  public dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private _pokemonService: PokemonService,
    private _rounter: Router
  ) {
    this.pokemons = [];
    this.dataSource = new MatTableDataSource<any>(this.pokemons);
    this.displayedColumns = ['position', 'name', 'height', 'weight'];
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
            position: index,
            name: pokemon.name,
            height: pokemon.height,
            weight: pokemon.weight
          };
          this.pokemons.push(pokemonStructure);
          this.pokemons.sort(
            (a, b) => a.position - b.position
          );
          this.dataSource = new MatTableDataSource<any>(this.pokemons);
          this.dataSource.paginator = this.paginator;
        },
        err => console.log(err)
      );
    };
  }

  getPokemon(pokemon: any): void {
    this._rounter.navigateByUrl(`pokemon/${pokemon.position}`);
  }
}
