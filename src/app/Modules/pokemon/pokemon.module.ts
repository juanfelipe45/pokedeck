import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

//Routing
import { PokemonRoutingModule } from '../../Routings/pokemon/pokemon-routing.module';

// Services
import { PokemonService } from 'src/app/Services/pokemon/pokemon.service';

// Modules
import { MaterialModule } from '../shared/material.module';

// Components
import { PokemonListComponent } from '../../Components/body/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from 'src/app/Components/body/pokemon-detail/pokemon-detail.component';


@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    PokemonRoutingModule
  ],
  providers: [
    PokemonService
  ]
})
export class PokemonModule { }
