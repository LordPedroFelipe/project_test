import { Component, OnInit, Pipe } from '@angular/core';
import * as _ from 'lodash';
import {Router, ActivatedRoute} from '@angular/router';
import {SolicitacoesService} from '../solicitacoes.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/from';

@Component({
  selector: 'solicitacao-um-mes',
  templateUrl: './solicitacao-um-mes.component.html'
})

export class SolicitacaoUmMesComponent implements OnInit {
  data: any[] = [];

  constructor(private solicitacoesService: SolicitacoesService,
              private router: Router) { }

  ngOnInit() {
    this.solicitacoesService.deals_updates_group()
      .subscribe((deals_updates_group) => {
        console.log('deals_updates_group' + deals_updates_group);
        this.data = deals_updates_group;
      });
  }
}
