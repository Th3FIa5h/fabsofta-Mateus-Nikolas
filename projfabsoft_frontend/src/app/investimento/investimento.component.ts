import { Component } from '@angular/core';
import { Investimento } from '../model/investimento';
import { InvestimentoService } from '../service/investimento.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-investimento',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './investimento.component.html',
  styleUrl: './investimento.component.css',
  providers: [InvestimentoService]
})
export class InvestimentoComponent {
  public listaInvestimentos: Investimento[] = [];
  constructor(
    private investimentoService: InvestimentoService
  ) {}
  ngOnInit(): void {
    this.investimentoService.getInvestimentos().subscribe( investimentos => {
      this.listaInvestimentos = investimentos;
    })
  }
}
