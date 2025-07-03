import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Alertapagamento } from '../model/alertapagamento';
import { AlertapagamentoService } from '../service/alertapagamento.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';
import { ContaService } from '../service/conta.service';
import { CartaoService } from '../service/cartao.service';
import { Conta } from '../model/conta';
import { Cartao } from '../model/cartao';

@Component({
  selector: 'app-alertapagamento',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './alertapagamento.component.html',
  styleUrl: './alertapagamento.component.css',
  providers: [AlertapagamentoService, ContaService, CartaoService]
})
export class AlertapagamentoComponent implements OnInit {
  public listaAlertaspagamento: Alertapagamento[] = [];
  public ultimosAlertas: Alertapagamento[] = [];
  public contas: Conta[] = [];
  public cartoes: Cartao[] = [];

  @ViewChild('myModal') modalElement!: ElementRef;
  private modal!: bootstrap.Modal;

  private alertaSelecionado!: Alertapagamento;

  constructor(
    private alertaService: AlertapagamentoService,
    private contaService: ContaService,
    private cartaoService: CartaoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.alertaService.getAlertapagamento().subscribe(alertas => {
      this.listaAlertaspagamento = alertas;
      this.ultimosAlertas = alertas
        .sort((a, b) => new Date(b.dataVencimento).getTime() - new Date(a.dataVencimento).getTime())
        .slice(0, 4);
    });
    this.carregarContasECartoes();
  }

  carregarContasECartoes() {
    this.contaService.getConta().subscribe(
      contas => this.contas = contas || [],
      () => this.contas = []
    );
    this.cartaoService.getCartao().subscribe(
      cartoes => this.cartoes = cartoes || [],
      () => this.cartoes = []
    );
  }

  novo() {
    this.router.navigate(['/alertapagamento/novo']);
  }

  alterar(alerta: Alertapagamento) {
    this.router.navigate(['/alertapagamento/alterar', alerta.id]);
  }

  abrirConfirmacao(alerta: Alertapagamento) {
    this.alertaSelecionado = alerta;
    this.modal = new bootstrap.Modal(this.modalElement.nativeElement);
    this.modal.show();
  }

  fecharConfirmacao() {
    this.modal.hide();
  }

  confirmarExclusao() {
    this.alertaService.excluirAlertapagamento(this.alertaSelecionado.id).subscribe(
      () => {
        this.fecharConfirmacao();
        this.alertaService.getAlertapagamento().subscribe(alertas => {
          this.listaAlertaspagamento = alertas;
        });
      },
      error => {
        console.error('Erro ao excluir alerta de pagamento:', error);
      }
    );
  }

  irParaDespesa() {
    this.router.navigate(['/despesa']);
  }

  home() {
    this.router.navigate(['/dashboard']);
  }
}
