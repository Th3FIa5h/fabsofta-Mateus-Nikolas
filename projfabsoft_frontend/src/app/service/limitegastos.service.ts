import { Injectable } from '@angular/core';
import { Limitegastos } from '../model/limitegastos';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LimitegastosService {
  apiURL = "http://localhost:8080/api/v1/limitegastos";

  constructor(private http:HttpClient) {}

  getLimitegastos(){
      return this.http.get<Limitegastos[]>(this.apiURL);  
    }
  
  saveLimitegastos(limitegastos: Limitegastos) {
    if(limitegastos.id) {
      return this.http.put(this.apiURL + '/' + limitegastos.id, limitegastos);
    }
    return this.http.post(this.apiURL, limitegastos);
  }

  getLimitegastosById(id: any) {
    return this.http.get<Limitegastos>(this.apiURL + '/' + id);
  }

  excluirLimitegastos(id: any){
    return this.http.delete<Limitegastos>(this.apiURL + '/' + id);
  }
}

