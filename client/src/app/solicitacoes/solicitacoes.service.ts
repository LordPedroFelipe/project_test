import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {API} from '../app.api';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SolicitacoesService {
  constructor(private http: HttpClient) {}


  deals_updates_group(): Observable<any> {
    return this.http.get<any>(`${API}/treasy/deals_updates_group_month`);
  }

  solicitacao_dois(): Observable<any> {
    return this.http.get<any>(`${API}/treasy/teste`);
  }

}
