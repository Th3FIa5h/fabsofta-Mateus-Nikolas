import { Component, ElementRef, ViewChild } from '@angular/core';
import { Cartao } from '../model/cartao';
import { CartaoService } from '../service/cartao.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-cartao',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './cartao.component.html',
  styleUrl: './cartao.component.css',
  providers: [CartaoService, Router]
})
export class CartaoComponent {
  public listaCartoes: Cartao[] = [];

  @ViewChild('myModal') modalElement!: ElementRef;
  private modal!: bootstrap.Modal;

  private cartaoSelecionado!: Cartao;

  constructor(
    private cartaoService: CartaoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartaoService.getCartao().subscribe(cartaoList => {
      this.listaCartoes = cartaoList.map(cartao => {
        if (cartao.validade && typeof cartao.validade === 'number') {
          const date = new Date(cartao.validade);
          cartao.validade = date.toISOString().substring(0, 7);
        } else if (cartao.validade && typeof cartao.validade === 'string' && cartao.validade.includes('-')) {
          cartao.validade = cartao.validade.split('T')[0].substring(0, 7);
        } else {
          cartao.validade = '';
        }
        return cartao;
      });
    });
  }

  novo() {
    this.router.navigate(['/cartao/novo']);
  }

  alterar(cartao: Cartao) {
    this.router.navigate(['/cartao/alterar', cartao.id]);
  }

  abrirConfirmacao(cartao: Cartao) {
    this.cartaoSelecionado = cartao;
    this.modal = new bootstrap.Modal(this.modalElement.nativeElement);
    this.modal.show();
  }

  fecharConfirmacao() {
    this.modal.hide();
  }

  confirmarExclusao() {
    this.cartaoService.excluirCartao(this.cartaoSelecionado.id).subscribe(
      () => {
        this.fecharConfirmacao();
        this.cartaoService.getCartao().subscribe(cartao => {
          this.listaCartoes = cartao;
        });
      },
      error => {
        console.error('Erro ao excluir cartão:', error);
      }
    );
  }
  irParaConta() {
  this.router.navigate(['/contas']);
  }

  home() {
  this.router.navigate(['/dashboard']);
}
}
