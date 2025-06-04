import { Injectable } from '@angular/core';
import { Investimento } from '../model/investimento';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvestimentoService {
  apiURL = "http://localhost:8080/api/v1/investimento";

  constructor(private http:HttpClient) {}

  getInvestimentos(){
      return this.http.get<Investimento[]>(this.apiURL);  
    }
}
