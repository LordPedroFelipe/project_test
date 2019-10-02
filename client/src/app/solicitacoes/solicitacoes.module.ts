import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import {DataTableModule} from 'angular2-datatable';
import {SharedModule} from '../shared/shared.module';

import { SolicitacaoUmMesComponent } from './solicitacao-um-mes/solicitacao-um-mes.component';
import { SolicitacaoDoisComponent } from './solicitacao-dois/solicitacao-dois.component';

const ROUTES: Routes = [
  {path: '', redirectTo: 'fst', pathMatch: 'full'},
  {path: 'solicitacao-um-mes', component: SolicitacaoUmMesComponent},
  {path: 'solicitacao-dois', component: SolicitacaoDoisComponent},
];

@NgModule({
  declarations: [
                  SolicitacaoUmMesComponent,
                  SolicitacaoDoisComponent
                ],
  imports: [SharedModule,
            DataTableModule,
            RouterModule.forChild(ROUTES),
            ConfirmationPopoverModule.forRoot({confirmButtonType: 'danger'})]
})

export class SolicitacoesModule {}
