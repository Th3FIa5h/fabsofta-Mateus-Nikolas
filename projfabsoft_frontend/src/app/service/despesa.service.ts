import { Injectable } from '@angular/core';
import { Despesa } from '../model/despesa';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DespesaService {
  apiURL = "http://localhost:8080/api/v1/despesa";

  constructor(private http:HttpClient) {}

  getDespesa(){
      return this.http.get<Despesa[]>(this.apiURL);  
    }
  
  saveDespesa(despesa: Despesa) {
    if(despesa.id) {
      return this.http.put(this.apiURL + '/' + despesa.id, despesa);
    }
    return this.http.post(this.apiURL, despesa);
  }

  getDespesaById(id: any) {
    return this.http.get<Despesa>(this.apiURL + '/' + id);
  }

  excluirDespesa(id: any){
    return this.http.delete<Despesa>(this.apiURL + '/' + id);
  }
}

