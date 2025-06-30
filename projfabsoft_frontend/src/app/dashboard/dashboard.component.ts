import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
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


