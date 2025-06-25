import { Injectable } from '@angular/core';
import { Receita } from '../model/receita';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {
  apiURL = "http://localhost:8080/api/v1/receita";

  constructor(private http:HttpClient) {}

  getReceita(){
      return this.http.get<Receita[]>(this.apiURL);  
    }
  
  saveReceita(receita: Receita) {
    if(receita.id) {
      return this.http.put(this.apiURL + '/' + receita.id, receita);
    }
    return this.http.post(this.apiURL, receita);
  }

  getReceitaById(id: any) {
    return this.http.get<Receita>(this.apiURL + '/' + id);
  }

  excluirReceita(id: any){
    return this.http.delete<Receita>(this.apiURL + '/' + id);
  }
}

