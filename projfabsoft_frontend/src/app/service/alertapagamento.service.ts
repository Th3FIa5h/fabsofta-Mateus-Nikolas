import { Injectable } from '@angular/core';
import { Alertapagamento } from '../model/alertapagamento';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlertapagamentoService {
  apiURL = "http://localhost:8080/api/v1/alertapagamento";

  constructor(private http:HttpClient) {}

  getAlertapagamento(){
      return this.http.get<Alertapagamento[]>(this.apiURL);  
    }
  
  saveAlertapagamento(alertapagamento: Alertapagamento) {
    if(alertapagamento.id) {
      return this.http.put(this.apiURL + '/' + alertapagamento.id, alertapagamento);
    }
    return this.http.post(this.apiURL, alertapagamento);
  }

  getAlertapagamentoById(id: any) {
    return this.http.get<Alertapagamento>(this.apiURL + '/' + id);
  }

  excluirAlertapagamento(id: any){
    return this.http.delete<Alertapagamento>(this.apiURL + '/' + id);
  }
}

