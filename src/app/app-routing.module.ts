import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersDetailsComponent } from './shared/components/characters/details/details.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/pages/search/search.module').then((m) => m.SearchModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./modules/pages/history/history.module').then((m) => m.HistoryModule),
  },
  {
    path: 'details/:id',
    component: CharactersDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
