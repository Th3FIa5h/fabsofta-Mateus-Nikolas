import { Component, ElementRef, ViewChild } from '@angular/core';
import { Limitegastos } from '../model/limitegastos';
import { LimitegastosService } from '../service/limitegastos.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-limitegastos',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './limitegastos.component.html',
  styleUrl: './limitegastos.component.css',
  providers: [LimitegastosService, Router]
})
export class LimitegastosComponent {
  public listaLimiteGastos: Limitegastos[] = [];

  @ViewChild('myModal') modalElement!: ElementRef;
  private modal!: bootstrap.Modal;

  private limiteSelecionado!: Limitegastos;

  constructor(
    private limiteService: LimitegastosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.limiteService.getLimitegastos().subscribe(limitegastos => {
      this.listaLimiteGastos = limitegastos;
    });
  }

  novo() {
    this.router.navigate(['/limitegastos/novo']);
  }

  alterar(limite: Limitegastos) {
    this.router.navigate(['/limitegastos/alterar', limite.id]);
  }

  abrirConfirmacao(limite: Limitegastos) {
    this.limiteSelecionado = limite;
    this.modal = new bootstrap.Modal(this.modalElement.nativeElement);
    this.modal.show();
  }

  fecharConfirmacao() {
    this.modal.hide();
  }

  confirmarExclusao() {
    this.limiteService.excluirLimitegastos(this.limiteSelecionado.id).subscribe(
      () => {
        this.fecharConfirmacao();
        this.limiteService.getLimitegastos().subscribe(limitegastos => {
          this.listaLimiteGastos = limitegastos;
        });
      },
      error => {
        console.error('Erro ao excluir limite de gastos:', error);
      }
    );
  }
}
