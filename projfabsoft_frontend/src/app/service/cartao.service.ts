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
  
  saveCartao(cartao: Cartao) {
    if(cartao.id) {
      return this.http.put(this.apiURL + '/' + cartao.id, cartao);
    }
    return this.http.post(this.apiURL, cartao);
  }

  getCartaoById(id: any) {
    return this.http.get<Cartao>(this.apiURL + '/' + id);
  }

  excluirCartao(id: any){
    return this.http.delete<Cartao>(this.apiURL + '/' + id);
  }
}

