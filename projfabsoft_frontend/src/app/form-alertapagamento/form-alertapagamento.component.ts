import { Component } from '@angular/core';
import { Alertapagamento } from '../model/alertapagamento';
import { AlertapagamentoService } from '../service/alertapagamento.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-alertapagamento',
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './form-alertapagamento.component.html',
  styleUrl: './form-alertapagamento.component.css',
  providers: [AlertapagamentoService, Router]
})
export class FormAlertapagamentoComponent {
  alertapagamento: Alertapagamento = new Alertapagamento();
  constructor(
    private alertapagamentoService: AlertapagamentoService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) {
    const id = this.activedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.alertapagamentoService.getAlertapagamentoById(id)
      .subscribe(alerta => {
        this.alertapagamento = alerta;
      });
    }
  }

  salvar() {
    this.alertapagamentoService.saveAlertapagamento(this.alertapagamento)
    .subscribe(res => {
      this.router.navigate(['/alertapagamento']);
    });
  }
}
