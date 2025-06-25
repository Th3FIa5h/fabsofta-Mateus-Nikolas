import { Injectable } from '@angular/core';
import { Objetivo } from '../model/objetivo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObjetivoService {
  apiURL = "http://localhost:8080/api/v1/objetivo";

  constructor(private http:HttpClient) {}

  getObjetivo(){
      return this.http.get<Objetivo[]>(this.apiURL);  
    }
  
  saveObjetivo(objetivo: Objetivo) {
    if(objetivo.id) {
      return this.http.put(this.apiURL + '/' + objetivo.id, objetivo);
    }
    return this.http.post(this.apiURL, objetivo);
  }

  getObjetivoById(id: any) {
    return this.http.get<Objetivo>(this.apiURL + '/' + id);
  }

  excluirObjetivo(id: any){
    return this.http.delete<Objetivo>(this.apiURL + '/' + id);
  }
}

