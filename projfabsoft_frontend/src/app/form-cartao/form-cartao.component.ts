import { Component } from '@angular/core';
import { Cartao } from '../model/cartao';
import { CartaoService } from '../service/cartao.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-cartao',
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './form-cartao.component.html',
  styleUrl: './form-cartao.component.css',
  providers: [CartaoService, Router]
})
export class FormCartaoComponent {
  cartao: Cartao = new Cartao();
  constructor(
    private cartaoService: CartaoService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) {
    const id = this.activedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.cartaoService.getCartaoById(id).subscribe(cartao => {
        if (cartao.validade && typeof cartao.validade === 'number') {
          const date = new Date(cartao.validade);
          cartao.validade = date.toISOString().substring(0, 7);
        } else if (cartao.validade && typeof cartao.validade === 'string' && cartao.validade.includes('-')) {
          cartao.validade = cartao.validade.split('T')[0].substring(0, 7);
        } else {
          cartao.validade = '';
        }
        this.cartao = cartao;
      });
    }
  }

  salvar() {
    if (this.cartao.validade && this.cartao.validade.length === 7) {
      this.cartao.validade = this.cartao.validade + '-01';
    }
    this.cartaoService.saveCartao(this.cartao)
      .subscribe(res => {
        this.router.navigate(['/cartao']);
      });
  }

  cancelar() {
    this.router.navigate(['/cartao'])
  }

  irParaCartao() {
  this.router.navigate(['/cartao']);
  }

  home() {
  this.router.navigate(['/dashboard']);
}
}
