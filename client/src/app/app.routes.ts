import {Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent },
  {path: 'fst', loadChildren: './solicitacoes/solicitacoes.module#SolicitacoesModule'},
  {path: '**', component: NotFoundComponent}
]
