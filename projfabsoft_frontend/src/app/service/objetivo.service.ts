import { Injectable } from '@angular/core';
import { Objetivo } from '../model/objetivo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObjetivoService {
  apiURL = "http://localhost:8080/api/v1/objetivos";

  constructor(private http:HttpClient) {}

  getObjetivos(){
      return this.http.get<Objetivo[]>(this.apiURL);  
    }
}
