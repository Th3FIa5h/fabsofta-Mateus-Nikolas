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
      this.cartaoService.getCartaoById(id)
      .subscribe(cartao => {
        this.cartao = cartao;
      });
    }
  }

  salvar() {
    this.cartaoService.saveCartao(this.cartao)
    .subscribe(res => {
      this.router.navigate(['/cartao']);
    });
  }
}
