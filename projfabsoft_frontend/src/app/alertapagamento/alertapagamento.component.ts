import { Component, ElementRef, ViewChild } from '@angular/core';
import { Alertapagamento } from '../model/alertapagamento';
import { AlertapagamentoService } from '../service/alertapagamento.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-alertapagamento',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './alertapagamento.component.html',
  styleUrl: './alertapagamento.component.css',
  providers: [AlertapagamentoService, Router]
})
export class AlertapagamentoComponent {
  public listaAlertaspagamento: Alertapagamento[] = [];

  @ViewChild('myModal') modalElement!: ElementRef;
  private modal!: bootstrap.Modal;

  private alertaSelecionado!: Alertapagamento;

  constructor(
    private alertaService: AlertapagamentoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.alertaService.getAlertapagamento().subscribe(alertas => {
      this.listaAlertaspagamento = alertas;
    });
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
}
