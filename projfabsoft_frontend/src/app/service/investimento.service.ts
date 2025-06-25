import { Injectable } from '@angular/core';
import { Investimento } from '../model/investimento';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvestimentoService {
  apiURL = "http://localhost:8080/api/v1/investimento";

  constructor(private http:HttpClient) {}

  getInvestimento(){
      return this.http.get<Investimento[]>(this.apiURL);  
    }
  
  saveInvestimento(investimento: Investimento) {
    if(investimento.id) {
      return this.http.put(this.apiURL + '/' + investimento.id, investimento);
    }
    return this.http.post(this.apiURL, investimento);
  }

  getInvestimentoById(id: any) {
    return this.http.get<Investimento>(this.apiURL + '/' + id);
  }

  excluirInvestimento(id: any){
    return this.http.delete<Investimento>(this.apiURL + '/' + id);
  }
}

