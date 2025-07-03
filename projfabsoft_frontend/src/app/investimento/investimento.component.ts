import { Component, ElementRef, ViewChild } from '@angular/core';
import { Investimento } from '../model/investimento';
import { InvestimentoService } from '../service/investimento.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import * as bootstrap from 'bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-investimento',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './investimento.component.html',
  styleUrl: './investimento.component.css',
  providers: [InvestimentoService]
})
export class InvestimentoComponent {
  public listaInvestimentos: Investimento[] = [];
  public listaInvestimentosCurto: Investimento[] = [];
  public listaInvestimentosMedio: Investimento[] = [];
  public listaInvestimentosLongo: Investimento[] = [];

  @ViewChild('myModal') modalElement!: ElementRef;
  private modal!: bootstrap.Modal;
  private investimentoSelecionado!: Investimento;

  constructor(
    private investimentoService: InvestimentoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.investimentoService.getInvestimento().subscribe(investimentos => {
      this.listaInvestimentos = investimentos;
      console.log(this.listaInvestimentos)
      this.listaInvestimentosCurto = investimentos.filter(inv => inv.prazo?.toLowerCase() == 'curto');
      console.log(this.listaInvestimentosCurto)
      this.listaInvestimentosMedio = investimentos.filter(inv => inv.prazo?.toLowerCase() == 'médio');
      console.log(this.listaInvestimentosMedio)
      this.listaInvestimentosLongo = investimentos.filter(inv => inv.prazo?.toLowerCase() == 'longo');
    });
  }

  novo() {
    this.router.navigate(['/investimento/novo']);
  }

  alterar(investimento: Investimento) {
    this.router.navigate(['/investimento/alterar', investimento.id]);
  }

  abrirConfirmacao(investimento: Investimento) {
    this.investimentoSelecionado = investimento;
    this.modal = new bootstrap.Modal(this.modalElement.nativeElement);
    this.modal.show();
  }

  fecharConfirmacao() {
    this.modal.hide();
  }

  confirmarExclusao() {
    this.investimentoService.excluirInvestimento(this.investimentoSelecionado.id).subscribe(
      () => {
        this.fecharConfirmacao();
        this.investimentoService.getInvestimento().subscribe(investimentos => {
          this.listaInvestimentos = investimentos;
          this.listaInvestimentosCurto = investimentos.filter(inv => inv.prazo?.toLowerCase() === 'curto');
          this.listaInvestimentosMedio = investimentos.filter(inv => inv.prazo?.toLowerCase() === 'medio');
          this.listaInvestimentosLongo = investimentos.filter(inv => inv.prazo?.toLowerCase() === 'longo');
          console.log(this.listaInvestimentosLongo)
        });
      },
      error => {
        console.error('Erro ao excluir investimento:', error);
      }
    );
  }
  home() {
  this.router.navigate(['/dashboard']);
  }
  irParaObjetivos() {
    this.router.navigate(['/objetivo']);
  }
}
