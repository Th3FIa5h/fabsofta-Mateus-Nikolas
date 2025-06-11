import { Component } from '@angular/core';
import { Alertapagamento } from '../model/alertapagamento';
import { AlertapagamentoService } from '../service/alertapagamento.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alertapagamento',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './alertapagamento.component.html',
  styleUrl: './alertapagamento.component.css',
  providers: [AlertapagamentoService]
})
export class AlertapagamentoComponent {
  public listaAlertaspagamento: Alertapagamento[] = [];
  constructor(
    private alertaService: AlertapagamentoService
  ) {}
  ngOnInit(): void {
    this.alertaService.getAlertasPagamento().subscribe( alertas => {
      this.listaAlertaspagamento = alertas;
    })
  }
}
