import { Injectable } from '@angular/core';
import { Conta } from '../model/conta';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContaService {
  apiURL = "http://localhost:8080/api/v1/conta";

  constructor(private http:HttpClient) {}

  getConta(){
      return this.http.get<Conta[]>(this.apiURL);  
    }
  
  saveConta(conta: Conta) {
    return this.http.post(this.apiURL, conta);
  }
}
