import { Component, ElementRef, ViewChild } from '@angular/core';
import { Despesa } from '../model/despesa';
import { DespesaService } from '../service/despesa.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-despesa',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './despesa.component.html',
  styleUrl: './despesa.component.css',
  providers: [DespesaService, Router]
})
export class DespesaComponent {
  public listaDespesas: Despesa[] = [];

  @ViewChild('myModal') modalElement!: ElementRef;
  private modal!: bootstrap.Modal;

  private despesaSelecionada!: Despesa;

  constructor(
    private despesaService: DespesaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.despesaService.getDespesa().subscribe(despesas => {
      this.listaDespesas = despesas;
    });
  }

  novo() {
    this.router.navigate(['/despesa/novo']);
  }

  alterar(despesa: Despesa) {
    this.router.navigate(['/despesa/alterar', despesa.id]);
  }

  abrirConfirmacao(despesa: Despesa) {
    this.despesaSelecionada = despesa;
    this.modal = new bootstrap.Modal(this.modalElement.nativeElement);
    this.modal.show();
  }

  fecharConfirmacao() {
    this.modal.hide();
  }

  confirmarExclusao() {
    this.despesaService.excluirDespesa(this.despesaSelecionada.id).subscribe(
      () => {
        this.fecharConfirmacao();
        this.despesaService.getDespesa().subscribe(despesas => {
          this.listaDespesas = despesas;
        });
      },
      error => {
        console.error('Erro ao excluir despesa:', error);
      }
    );
  }

  irParaReceitas() {
  this.router.navigate(['/receita']);
  }

  home() {
  this.router.navigate(['/dashboard']);
}
}
