import { Injectable } from '@angular/core';
import { Despesa } from '../model/despesa';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DespesaService {
  apiURL = "http://localhost:8080/api/v1/despesa";

  constructor(private http:HttpClient) {}

  getDespesas(){
      return this.http.get<Despesa[]>(this.apiURL);  
    }
}
