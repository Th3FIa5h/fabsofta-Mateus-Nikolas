import { Component } from '@angular/core';
import { Cartao } from '../model/cartao';
import { CartaoService } from '../service/cartao.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cartao',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './cartao.component.html',
  styleUrl: './cartao.component.css',
  providers: [CartaoService]
})
export class CartaoComponent {
  public listaCartoes: Cartao[] = [];
  constructor(
    private cartaoService:CartaoService
  ) {}
  ngOnInit(): void {
    this.cartaoService.getCartao().subscribe( cartao => {
      this.listaCartoes = cartao;
    })
  }
}
