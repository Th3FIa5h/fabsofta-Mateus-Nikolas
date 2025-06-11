import { Injectable } from '@angular/core';
import { Cartao } from '../model/cartao';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartaoService {
  apiURL = "http://localhost:8080/api/v1/cartao";

  constructor(private http:HttpClient) {}

  getCartao(){
      return this.http.get<Cartao[]>(this.apiURL);  
    }
}
