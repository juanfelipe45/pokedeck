import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { PokemonListComponent } from 'src/app/Components/body/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from 'src/app/Components/body/pokemon-detail/pokemon-detail.component';


const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent
  },
  {
    path: ':id',
    component: PokemonDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
