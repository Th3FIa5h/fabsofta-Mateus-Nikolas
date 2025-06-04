import { Injectable } from '@angular/core';
import { Limitegastos } from '../model/limitegastos';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LimitegastosService {
  apiURL = "http://localhost:8080/api/v1/limitegastos";

  constructor(private http:HttpClient) {}

  getLimiteGastos(){
      return this.http.get<Limitegastos[]>(this.apiURL);  
    }
}
