import { Component } from '@angular/core';
import { Objetivo } from '../model/objetivo';
import { ObjetivoService } from '../service/objetivo.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-objetivo',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './objetivo.component.html',
  styleUrl: './objetivo.component.css',
  providers: [ObjetivoService]
})
export class ObjetivoComponent {
  public listaObjetivos: Objetivo[] = [];
  constructor(
    private objetivoService: ObjetivoService
  ) {}
  ngOnInit(): void {
    this.objetivoService.getObjetivos().subscribe( objetivos => {
      this.listaObjetivos = objetivos;
    })
  }
}
