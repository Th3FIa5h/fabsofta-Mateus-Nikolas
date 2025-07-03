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
  providers: [DespesaService]
})
export class DespesaComponent {
  public listaDespesas: Despesa[] = [];
  public listaDespesasFixa: Despesa[] = [];
  public listaDespesasVariavel: Despesa[] = [];

  @ViewChild('myModal') modalElement!: ElementRef;
  private modal!: bootstrap.Modal;

  private despesaSelecionada!: Despesa;

  constructor(
    private despesaService: DespesaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.despesaService.getDespesa().subscribe(despesas => {
      this.listaDespesas = despesas.map(d => {
        if (d.data && typeof d.data === 'number') {
          const date = new Date(d.data);
          d.data = date.toISOString().substring(0, 10) as any;
        } else if (d.data && typeof d.data === 'string' && (d.data as string).includes('-')) {
          d.data = (d.data as string).split('T')[0] as any;
        }
        if (d.cartao && d.cartao.validade) {
          if (typeof d.cartao.validade === 'number') {
            const vdate = new Date(d.cartao.validade);
            d.cartao.validade = vdate.toISOString().substring(0, 7);
          } else if (typeof d.cartao.validade === 'string' && d.cartao.validade.includes('-')) {
            d.cartao.validade = d.cartao.validade.split('T')[0].substring(0, 7);
          }
        }
        return d;
      });
      this.listaDespesasFixa = this.listaDespesas.filter(d => d.tipo?.toLowerCase() === 'fixa');
      this.listaDespesasVariavel = this.listaDespesas.filter(d => d.tipo?.toLowerCase() === 'variável' || d.tipo?.toLowerCase() === 'variavel');
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
