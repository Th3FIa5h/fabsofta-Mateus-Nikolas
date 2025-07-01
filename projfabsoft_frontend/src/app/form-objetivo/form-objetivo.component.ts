import { Component } from '@angular/core';
import { Objetivo } from '../model/objetivo';
import { Receita } from '../model/receita';
import { Investimento } from '../model/investimento';
import { ObjetivoService } from '../service/objetivo.service';
import { ReceitaService } from '../service/receita.service';
import { InvestimentoService } from '../service/investimento.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-objetivo',
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './form-objetivo.component.html',
  styleUrl: './form-objetivo.component.css',
  providers: [ObjetivoService, ReceitaService, InvestimentoService, Router]
})
export class FormObjetivoComponent {
  objetivo: Objetivo = new Objetivo();
  receitasDisponiveis: Receita[] = [];
  investimentosDisponiveis: Investimento[] = [];

  constructor(
    private objetivoService: ObjetivoService,
    private receitaService: ReceitaService,
    private investimentoService: InvestimentoService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) {
    const id = this.activedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.objetivoService.getObjetivoById(id)
        .subscribe(objetivo => {
          this.objetivo = objetivo;
        });
    }
    this.carregarReceitas();
    this.carregarInvestimentos();
  }

  carregarReceitas() {
    this.receitaService.getReceita().subscribe(receitas => {
      this.receitasDisponiveis = receitas;
    });
  }

  carregarInvestimentos() {
    this.investimentoService.getInvestimento().subscribe(investimentos => {
      this.investimentosDisponiveis = investimentos;
    });
  }

  salvar() {
    this.objetivoService.saveObjetivo(this.objetivo)
      .subscribe(res => {
        this.router.navigate(['/objetivo']);
      });
  }

  irParaObjetivo() {
    this.router.navigate(['/objetivo']);
  }

  cancelar() {
    this.router.navigate(['/objetivo']);
  }

  home() {
    this.router.navigate(['/dashboard']);
  }
}
