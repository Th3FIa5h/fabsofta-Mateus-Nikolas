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
    this.carregarReceitas(() => {
      this.carregarInvestimentos(() => {
        const id = this.activedRoute.snapshot.paramMap.get('id');
        if (id) {
          this.objetivoService.getObjetivoById(id)
            .subscribe(objetivo => {
              if (objetivo.listaReceitas && Array.isArray(objetivo.listaReceitas)) {
                objetivo.listaReceitas = objetivo.listaReceitas.map((r: any) => {
                  return this.receitasDisponiveis.find(rd => rd.id === (r.id || r)) || r;
                });
              } else {
                objetivo.listaReceitas = [];
              }
              if (objetivo.listaInvestimento && Array.isArray(objetivo.listaInvestimento)) {
                objetivo.listaInvestimento = objetivo.listaInvestimento.map((i: any) => {
                  return this.investimentosDisponiveis.find(inv => inv.id === (i.id || i)) || i;
                });
              } else {
                objetivo.listaInvestimento = [];
              }
              this.objetivo = objetivo;
              this.atualizarProgressoAtual();
            });
        }
      });
    });
  }

  carregarReceitas(callback?: () => void) {
    this.receitaService.getReceita().subscribe(receitas => {
      this.receitasDisponiveis = receitas;
      if (callback) callback();
    });
  }

  carregarInvestimentos(callback?: () => void) {
    this.investimentoService.getInvestimento().subscribe(investimentos => {
      this.investimentosDisponiveis = investimentos;
      if (callback) callback();
    });
  }

  salvar() {
    const objetivoParaSalvar: any = { ...this.objetivo };
    objetivoParaSalvar.listareceitas = (this.objetivo.listaReceitas || []).map((r: any) => {
      const receita = typeof r === 'object' && r.id ? this.receitasDisponiveis.find(rd => rd.id === r.id) || r : this.receitasDisponiveis.find(rd => rd.id === r) || { id: r };
      return {
        id: receita.id,
        descricao: receita.descricao || '',
        valor: receita.valor || 0,
        data: receita.data || null,
        tipo: receita.tipo || null,
        conta: receita.conta || null,
        cartao: receita.cartao || null
      };
    });
    objetivoParaSalvar.listainvestimento = (this.objetivo.listaInvestimento || []).map((i: any) => {
      const investimento = typeof i === 'object' && i.id ? this.investimentosDisponiveis.find(inv => inv.id === i.id) || i : this.investimentosDisponiveis.find(inv => inv.id === i) || { id: i };
      return {
        id: investimento.id,
        descricao: investimento.descricao || '',
        valor: investimento.valor || 0,
        prazo: investimento.prazo || null,
        conta: investimento.conta || null
      };
    });
    delete objetivoParaSalvar.listaReceitas;
    delete objetivoParaSalvar.listaInvestimento;

    this.objetivoService.saveObjetivo(objetivoParaSalvar)
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
  atualizarProgressoAtual() {
    const totalReceitas = (this.objetivo.listaReceitas || []).reduce((acc, r) => acc + (r.valor || 0), 0);
    const totalInvestimentos = (this.objetivo.listaInvestimento || []).reduce((acc, i) => acc + (i.valor || 0), 0);
    const total = totalReceitas + totalInvestimentos;
    if (this.objetivo.valorAlvo && this.objetivo.valorAlvo > 0) {
      let percentual = (total / this.objetivo.valorAlvo) * 100;
      if (percentual > 100) percentual = 100;
      this.objetivo.progressoAtual = percentual;
    } else {
      this.objetivo.progressoAtual = 0;
    }
  }
  onReceitasChange() {
    this.atualizarProgressoAtual();
  }
  onInvestimentosChange() {
    this.atualizarProgressoAtual();
  }
}
