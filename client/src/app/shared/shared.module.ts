import {NgModule, ModuleWithProviders} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HTTP_INTERCEPTORS} from '@angular/common/http'
import {MyDatePickerModule} from 'mydatepicker';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import {TooltipModule} from "ng2-tooltip"
import {SelectModule} from 'ng2-select'
import {TextMaskModule} from 'angular2-text-mask'

import {SolicitacoesService} from '../solicitacoes/solicitacoes.service'
import {AlertService} from './alerts/alerts.service'

import {InputComponent} from './input/input.component'
import {AlertsComponent} from './alerts/alerts.component';

@NgModule({
  declarations: [InputComponent, AlertsComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [InputComponent,
            AlertsComponent,
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MyDatePickerModule,
            TooltipModule,
            SelectModule,
            TextMaskModule]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [AlertService, SolicitacoesService]
    }
  }
}
