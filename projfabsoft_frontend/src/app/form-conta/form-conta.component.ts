import { Component } from '@angular/core';
import { Conta } from '../model/conta';
import { ContaService } from '../service/conta.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';	

@Component({
  selector: 'app-form-conta',
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './form-conta.component.html',
  styleUrl: './form-conta.component.css',
  providers: [ContaService, Router]
})
export class FormContaComponent {
  conta: Conta = new Conta();
  constructor(
    private contaService:ContaService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) {
    const id = this.activedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.contaService.getContaById(id)
      .subscribe( conta => {
        this.conta = conta;
      });
    }
  }

  salvar(){
    this.contaService.saveConta(this.conta)
    .subscribe( res => {
      this.router.navigate(['/contas']);
    });
  }

  cancelar() {
    this.router.navigate(['/contas'])
  }

  irParaConta() {
  this.router.navigate(['/contas']);
  }

  home() {
  this.router.navigate(['/dashboard']);
}
}
