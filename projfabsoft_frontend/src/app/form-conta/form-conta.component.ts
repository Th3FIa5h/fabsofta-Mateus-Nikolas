import { Component } from '@angular/core';
import { Conta } from '../model/conta';
import { ContaService } from '../service/conta.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';	

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
    private router: Router
  ) {}

  salvar(){
    this.contaService.saveConta(this.conta)
    .subscribe( res => {
      this.router.navigate(['/contas']);
    });
  }
}
