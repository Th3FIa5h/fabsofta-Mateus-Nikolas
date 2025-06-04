import { Injectable } from '@angular/core';
import { Receita } from '../model/receita';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {
  apiURL = "http://localhost:8080/api/v1/receita";

  constructor(private http:HttpClient) {}

  getReceitas(){
      return this.http.get<Receita[]>(this.apiURL);  
    }
}
