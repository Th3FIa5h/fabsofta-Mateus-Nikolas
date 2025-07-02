import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertapagamentoService } from '../service/alertapagamento.service';
import { ContaService } from '../service/conta.service';
import { CartaoService } from '../service/cartao.service';
import { Alertapagamento } from '../model/alertapagamento';
import { Conta } from '../model/conta';
import { Cartao } from '../model/cartao';

@Component({
  selector: 'app-form-alertapagamento',
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './form-alertapagamento.component.html',
  styleUrl: './form-alertapagamento.component.css',
  providers: [AlertapagamentoService, ContaService, CartaoService, Router]
})
export class FormAlertapagamentoComponent {
  contas: Conta[] = [];
  cartoes: Cartao[] = [];
  alertapagamento: Alertapagamento = new Alertapagamento();

  constructor(
    private alertapagamentoService: AlertapagamentoService,
    private contaService: ContaService,
    private cartaoService: CartaoService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) {
    const id = this.activedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.alertapagamentoService.getAlertapagamentoById(id)
        .subscribe(alerta => {
          this.alertapagamento = alerta;

          this.carregarContas(() => {
            if (this.alertapagamento.conta && this.contas.length > 0) {
              this.alertapagamento.conta = this.contas.find(c => c.id === this.alertapagamento.conta.id) || this.alertapagamento.conta;
            }
          });
          this.carregarCartoes(() => {
            if (this.alertapagamento.cartao && this.cartoes.length > 0) {
              this.alertapagamento.cartao = this.cartoes.find(c => c.id === this.alertapagamento.cartao.id) || this.alertapagamento.cartao;
            }
          });

          if (this.alertapagamento.dataVencimento) {
            if (typeof this.alertapagamento.dataVencimento === 'number') {
              this.alertapagamento.dataVencimento = new Date(this.alertapagamento.dataVencimento);
            } else if (typeof this.alertapagamento.dataVencimento === 'string' && String(this.alertapagamento.dataVencimento).length > 10) {
              this.alertapagamento.dataVencimento = new Date(this.alertapagamento.dataVencimento);
            }
          }
        });
    }
    this.carregarContas();
    this.carregarCartoes();
  }

  carregarContas(callback?: () => void) {
    this.contaService.getConta().subscribe(contas => {
      this.contas = contas;
      if (callback) callback();
    });
  }

  carregarCartoes(callback?: () => void) {
    this.cartaoService.getCartao().subscribe(cartoes => {
      this.cartoes = cartoes;
      if (callback) callback();
    });
  }

  salvar() {
    this.alertapagamentoService.saveAlertapagamento(this.alertapagamento)
      .subscribe(res => {
        this.router.navigate(['/alertapagamento']);
      });
  }

  cancelar() {
    this.router.navigate(['/alertapagamento'])
  }

  irParaAlertaPagamento() {
    this.router.navigate(['/alertapagamento']);
  }

  home() {
    this.router.navigate(['/dashboard']);
  }
}
