import { Injectable } from '@angular/core';
import { Alertapagamento } from '../model/alertapagamento';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlertapagamentoService {
  apiURL = "http://localhost:8080/api/v1/alertapagamento";

  constructor(private http:HttpClient) {}

  getAlertasPagamento(){
      return this.http.get<Alertapagamento[]>(this.apiURL);  
    }
}
