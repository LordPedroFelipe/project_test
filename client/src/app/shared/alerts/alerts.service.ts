import {EventEmitter} from '@angular/core'

export class AlertService {
  alertType: string
  notifier = new EventEmitter<string>()

  notify(message: string, tipo: string){
    this.alertType = tipo
    this.notifier.emit(message)
  }
}
