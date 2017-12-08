import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Receita } from '../../models/receita';
import { AuthenticationService } from '../login/authentication.service';
@Injectable()
export class ReceitasService {
  private receitasUrl = 'http://gerirreceitas2017arqsi.azurewebsites.net/api/receita/';
  //verificar o servidor:porta
  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService) { }
    getReceitas(): Observable<Receita[]> {
      return this.http.get<Receita[]>(this.receitasUrl,
        this.getHeaders());
    }

    getReceitasByIdReceita(receitaId : string): Observable<Receita[]> {
      return this.http.get<Receita[]>(this.receitasUrl + receitaId,
        this.getHeaders());
    }


  getHeaders() {
    let headers = new HttpHeaders({
      'x-access-token': this.authenticationService.userInfo.token
    });

    let httpOptions = {
      headers: headers
    };
    return httpOptions;
  }
}