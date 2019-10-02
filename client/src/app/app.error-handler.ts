import {ErrorHandler, Injectable, Injector} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';

import {AlertService} from './shared/alerts/alerts.service';

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {

  constructor(private ns: AlertService, private injector: Injector) {
    super();
  }

  handleError(errorResponse: HttpErrorResponse | any) {
    if(errorResponse instanceof HttpErrorResponse) {
      const message = errorResponse.error.message;
      switch (errorResponse.status) {
        case 401:
          this.ns.notify(message || 'Não autorizado', 'warning');
        break;
        case 403:
          this.ns.notify(message || 'Não autorizado', 'warning');
        break;
        case 404:
          this.ns.notify(message || 'Recurso não encontrado. Verifique o console para mais detalhes', 'warning');
        break;
      }
    }
    super.handleError(errorResponse);
  }
}
