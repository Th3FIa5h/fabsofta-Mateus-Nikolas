import { Component } from '@angular/core';
import { Despesa } from '../model/despesa';
import { DespesaService } from '../service/despesa.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ContaService } from '../service/conta.service';
import { CartaoService } from '../service/cartao.service';
import { Conta } from '../model/conta';
import { Cartao } from '../model/cartao';

@Component({
  selector: 'app-form-despesa',
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './form-despesa.component.html',
  styleUrl: './form-despesa.component.css',
  providers: [DespesaService, Router, ContaService, CartaoService]
})
export class FormDespesaComponent {
  despesa: Despesa = new Despesa();
  contas: Conta[] = [];
  cartoes: Cartao[] = [];

  constructor(
    private despesaService: DespesaService,
    private contaService: ContaService,
    private cartaoService: CartaoService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) {
    this.contaService.getConta().subscribe(contas => this.contas = contas);
    this.cartaoService.getCartao().subscribe(cartoes => this.cartoes = cartoes);

    const id = this.activedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.despesaService.getDespesaById(id)
      .subscribe(despesa => {
        this.despesa = despesa;
      });
    }
  }

  salvar() {
    this.despesaService.saveDespesa(this.despesa)
    .subscribe(res => {
      this.router.navigate(['/despesa']);
    });
  }

  cancelar() {
    this.router.navigate(['/despesa'])
  }

  irParaDespesas() {
  this.router.navigate(['/despesa']);
  }

  home() {
  this.router.navigate(['/dashboard']);
}
}
