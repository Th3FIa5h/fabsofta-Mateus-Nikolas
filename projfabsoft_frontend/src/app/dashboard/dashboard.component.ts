import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReceitaService } from '../service/receita.service';
import { DespesaService } from '../service/despesa.service';
import { AlertapagamentoService } from '../service/alertapagamento.service';
import { LimitegastosService } from '../service/limitegastos.service';
import { Receita } from '../model/receita';
import { Despesa } from '../model/despesa';
import { Alertapagamento } from '../model/alertapagamento';
import { Limitegastos } from '../model/limitegastos';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, HttpClientModule, BaseChartDirective],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  providers: [ReceitaService, DespesaService, AlertapagamentoService, LimitegastosService ,BaseChartDirective, provideCharts(withDefaultRegisterables())]
})
export class DashboardComponent implements OnInit {
  receitaMes: number = 0;
  despesaMes: number = 0;
  saldoMensal: number = 0;
  saldoTotal: number = 0;
  receitas: Receita[] = [];
  despesas: Despesa[] = [];
  alertas: Alertapagamento[] = [];
  alertasPendentes: Alertapagamento[] = [];
  ultimasTransacoes: any[] = [];
  limites: Limitegastos[] = [];

  coresLimite: { [key: number]: string } = {};

  public chartData: ChartConfiguration['data'] = {
    labels: ['Receita', 'Despesa'],
    datasets: [
      { data: [this.receitaMes, this.despesaMes], label: this.getMesAtual() }
    ],
  }; 

  public chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: { display: true, position: 'bottom' }
    }
  };

  constructor(
    private router: Router,
    private receitaService: ReceitaService,
    private despesaService: DespesaService,
    private alertapagamentoService: AlertapagamentoService,
    private limitegastosService: LimitegastosService
  ) {}

  ngOnInit(): void {
    this.carregarDados();
    this.carregarAlertas();
    this.carregarLimites();
  }

  carregarAlertas() {
    this.alertapagamentoService.getAlertapagamento().subscribe(alertas => {
      this.alertas = alertas;
      this.alertasPendentes = alertas.filter(a => a.status === 'Pendente');
    });
  }

  carregarDados() {
    this.receitaService.getReceita().subscribe(receitas => {
      this.despesaService.getDespesa().subscribe(despesas => {
        this.receitas = receitas;
        this.despesas = despesas;
        this.calcularResumos();
        this.carregarUltimasTransacoes();
      });
    });
  }

  carregarUltimasTransacoes() {
    const transacoes = [
      ...this.receitas.map(r => ({ ...r, tipoTransacao: 'Receita' })),
      ...this.despesas.map(d => ({ ...d, tipoTransacao: 'Despesa' }))
    ];
    transacoes.sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());
    this.ultimasTransacoes = transacoes.slice(0, 4);
  }

  carregarLimites() {
    this.limitegastosService.getLimitegastos().subscribe(limites => {
      this.limites = limites;
      // Gera cor aleatória para cada limite
      this.limites.forEach(limite => {
        this.coresLimite[limite.id] = this.getCorAleatoria();
      });
    });
  }

  calcularResumos() {
    const now = new Date();
    const mesAtual = now.getMonth();
    const anoAtual = now.getFullYear();
    const receitasMes = this.receitas.filter(r => {
      const data = new Date(r.data);
      return data.getMonth() === mesAtual && data.getFullYear() === anoAtual;
    });
    const despesasMes = this.despesas.filter(d => {
      const data = new Date(d.data);
      return data.getMonth() === mesAtual && data.getFullYear() === anoAtual;
    });
    this.receitaMes = receitasMes.reduce((sum, r) => sum + (r.valor || 0), 0);
    this.despesaMes = despesasMes.reduce((sum, d) => sum + (d.valor || 0), 0);
    this.saldoMensal = this.receitaMes - this.despesaMes;

    const dozeMesesAtras = new Date(anoAtual, mesAtual - 11, 1);
    const receitas12 = this.receitas.filter(r => new Date(r.data) >= dozeMesesAtras);
    const despesas12 = this.despesas.filter(d => new Date(d.data) >= dozeMesesAtras);
    const totalReceitas12 = receitas12.reduce((sum, r) => sum + (r.valor || 0), 0);
    const totalDespesas12 = despesas12.reduce((sum, d) => sum + (d.valor || 0), 0);
    this.saldoTotal = totalReceitas12 - totalDespesas12;

    this.chartData = {
      labels: ['Receita', 'Despesa'],
      datasets: [
        { data: [this.receitaMes, this.despesaMes], label: this.getMesAtual() }
      ]
    };
  }

  getCorAleatoria(): string {
    const cores = ['#e57373', '#64b5f6', '#81c784', '#ffd54f', '#ba68c8', '#4db6ac', '#ffb74d', '#a1887f', '#90a4ae', '#f06292'];
    return cores[Math.floor(Math.random() * cores.length)];
  }

  getPercentualLimite(limite: Limitegastos): number {
    if (!this.limites || this.limites.length === 0) return 0;
    const totalCategorias = this.limites.length;
    if (totalCategorias === 1) return 100;
    if (limite.valorLimite && totalCategorias > 1) {
      return Math.round((1 / totalCategorias) * 100);
    }
    return 0;
  }

  getMesAtual(): string {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return meses[new Date().getMonth()];
  }

  irParaBanco() { this.router.navigate(['/banco']); }
  irParaConta() { this.router.navigate(['/contas']); }
  irParaCartao() { this.router.navigate(['/cartao']); }
  irParaAlertaPagamento() { this.router.navigate(['/alertapagamento']); }
  irParaDespesas() { this.router.navigate(['/despesa']); }
  irParaInvestimento() { this.router.navigate(['/investimento']); }
  irParaLimiteGastos() { this.router.navigate(['/limitegastos']); }
  irParaObjetivo() { this.router.navigate(['/objetivo']); }
  irParaReceitas() { this.router.navigate(['/receita']); }
  irParaNovaReceitas() { this.router.navigate(['/receita/novo']); }
  irParaNovaDespesa() { this.router.navigate(['/despesa/novo']); }
  irParaNovoInvestimento() { this.router.navigate(['/investimento/novo']); }
  irParaNovoObjetivo() { this.router.navigate(['/objetivo/novo']); }
}


