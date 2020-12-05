import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pokemon'
  },
  {
    path: 'pokemon',
    loadChildren: () => import('../Modules/pokemon/pokemon.module').then(m => m.PokemonModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'pokemon'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
