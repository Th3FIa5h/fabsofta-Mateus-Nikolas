import { Component } from '@angular/core';
import { Investimento } from '../model/investimento';
import { InvestimentoService } from '../service/investimento.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-investimento',
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './form-investimento.component.html',
  styleUrl: './form-investimento.component.css',
  providers: [InvestimentoService, Router]
})
export class FormInvestimentoComponent {
  investimento: Investimento = new Investimento();
  constructor(
    private investimentoService: InvestimentoService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) {
    const id = this.activedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.investimentoService.getInvestimentoById(id)
      .subscribe(investimento => {
        this.investimento = investimento;
      });
    }
  }

  salvar() {
    this.investimentoService.saveInvestimento(this.investimento)
    .subscribe(res => {
      this.router.navigate(['/investimento']);
    });
  }

  irParaInvestimento() {
  this.router.navigate(['/investimento']);
  }

  home() {
  this.router.navigate(['/dashboard']);
}
}
