import { Component, OnInit, Pipe } from '@angular/core';
import * as _ from 'lodash';
import {Router} from '@angular/router';
import {SolicitacoesService} from '../solicitacoes.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/from';

@Component({
  selector: 'solicitacao-dois',
  templateUrl: './solicitacao-dois.component.html'
})

export class SolicitacaoDoisComponent implements OnInit {
  data: any[] = [];

  constructor(private solicitacoesService: SolicitacoesService,
              private router: Router) { }

  ngOnInit() {
    this.solicitacoesService.solicitacao_dois()
      .subscribe((solicitacao_dois) =>{
        console.log('solicitacao_dois' + solicitacao_dois);
        this.data = solicitacao_dois;
      });
  }
}
