import { Component } from '@angular/core';
import { Conta } from '../model/conta';
import { ContaService } from '../service/conta.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router} from '@angular/router';

@Component({
  selector: 'app-conta',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './conta.component.html',
  styleUrl: './conta.component.css',
  providers: [ContaService, Router]
})
export class ContaComponent {
  public listaContas: Conta[] = [];
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
}
