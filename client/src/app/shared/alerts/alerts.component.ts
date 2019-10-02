import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations'

import {AlertService} from './alerts.service'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/timer'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'ses-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css'],
  animations: [
    trigger('alert-visibility', [
      state('hidden', style({
        opacity: 0,
        bottom: '0px'
      })),
      state('visible', style({
        opacity: 1,
        bottom: '30px'
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out'))
    ])
  ]
})
export class AlertsComponent implements OnInit {

  message: string = 'Olá mundo!'
  alertVisibility: string = 'hidden'

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.notifier
      .do(message => {
        this.message = message
        this.alertVisibility = 'visible'
    }).switchMap(message => Observable.timer(3000))
      .subscribe(timer => this.alertVisibility = 'hidden')
  }

  cssClass() {
    if (this.alertService.alertType == undefined || this.alertService.alertType == '') {
        return 'alertbar';
    }

    switch (this.alertService.alertType) {
      case this.alertService.alertType = 'success':
        return 'alertbar-success';
      case this.alertService.alertType = 'danger':
        return 'alertbar-danger';
      case this.alertService.alertType = 'warning':
        return 'alertbar-warning';
    }
  }
}
