import { Component, ElementRef, ViewChild } from '@angular/core';
import { Receita } from '../model/receita';
import { ReceitaService } from '../service/receita.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-receita',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './receita.component.html',
  styleUrl: './receita.component.css',
  providers: [ReceitaService, Router]
})
export class ReceitaComponent {
  public listaReceitas: Receita[] = [];

  @ViewChild('myModal') modalElement!: ElementRef;
  private modal!: bootstrap.Modal;

  private receitaSelecionada!: Receita;

  constructor(
    private receitaService: ReceitaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.receitaService.getReceita().subscribe(receitas => {
      this.listaReceitas = receitas;
    });
  }

  novo() {
    this.router.navigate(['/receita/novo']);
  }

  alterar(receita: Receita) {
    this.router.navigate(['/receita/alterar', receita.id]);
  }

  abrirConfirmacao(receita: Receita) {
    this.receitaSelecionada = receita;
    this.modal = new bootstrap.Modal(this.modalElement.nativeElement);
    this.modal.show();
  }

  fecharConfirmacao() {
    this.modal.hide();
  }

  confirmarExclusao() {
    this.receitaService.excluirReceita(this.receitaSelecionada.id).subscribe(
      () => {
        this.fecharConfirmacao();
        this.receitaService.getReceita().subscribe(receitas => {
          this.listaReceitas = receitas;
        });
      },
      error => {
        console.error('Erro ao excluir receita:', error);
      }
    );
  }
}
