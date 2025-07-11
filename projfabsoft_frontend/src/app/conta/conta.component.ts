import { Component,ElementRef, ViewChild } from '@angular/core';
import { Conta } from '../model/conta';
import { ContaService } from '../service/conta.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router} from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-conta',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './conta.component.html',
  styleUrl: './conta.component.css',
  providers: [ContaService]
})
export class ContaComponent {
  public listaContas: Conta[] = [];

  @ViewChild('myModal') modalElement!: ElementRef;
  private modal!: bootstrap.Modal;

  private contaSelecionada!: Conta;

  constructor(
    private contaService:ContaService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.contaService.getConta().subscribe( conta => {
      this.listaContas = conta;
    })
  }

  novo() {
    this.router.navigate(['/contas/novo']);
  }

  alterar(conta: Conta) {
    this.router.navigate(['/contas/alterar', conta.id]);
  }

  
  abrirConfirmacao(conta:Conta) {
      this.contaSelecionada = conta;
      this.modal = new bootstrap.Modal(this.modalElement.nativeElement);
      this.modal.show();
  }

  fecharConfirmacao() {
    this.modal.hide();
  }

  confirmarExclusao() {
    this.contaService.excluirConta(this.contaSelecionada.id).subscribe(
        () => {
            this.fecharConfirmacao();
            this.contaService.getConta().subscribe(
              conta => {
                this.listaContas = conta;
              }
            );
        },
        error => {
            this.fecharConfirmacao();
            if (error && error.status === 500 && error.error && error.error.message && error.error.message.includes('Referential integrity constraint violation')) {
              alert('Não é possível excluir esta conta porque ela está vinculada a um investimento ou outro registro. Remova os vínculos antes de excluir.');
            } else {
              alert('Erro ao excluir conta.');
            }
            console.error('Erro ao excluir conta:', error);
        }
    );
  }
  irParaCartao() {
  this.router.navigate(['/cartao']);
  }

  home() {
  this.router.navigate(['/dashboard']);
}
}
