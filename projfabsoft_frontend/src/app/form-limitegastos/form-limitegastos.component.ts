import { Component, OnInit } from '@angular/core';
import { Limitegastos } from '../model/limitegastos';
import { LimitegastosService } from '../service/limitegastos.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Despesa } from '../model/despesa';
import { DespesaService } from '../service/despesa.service';

@Component({
  selector: 'app-form-limitegastos',
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './form-limitegastos.component.html',
  styleUrl: './form-limitegastos.component.css',
  providers: [LimitegastosService, DespesaService]
})
export class FormLimitegastosComponent implements OnInit {
  limitegastos: Limitegastos = new Limitegastos();
  despesasDisponiveis: Despesa[] = [];

  constructor(
    private limitegastosService: LimitegastosService,
    private router: Router,
    private activedRoute: ActivatedRoute,
    private despesaService: DespesaService
  ) {
    const id = this.activedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.limitegastosService.getLimitegastosById(id)
      .subscribe(limitegastos => {
        this.limitegastos = limitegastos;
      });
    }
  }

  ngOnInit() {
    this.despesaService.getDespesa().subscribe(despesas => {
      this.despesasDisponiveis = despesas;
    });
  }

  salvar() {
    this.limitegastosService.saveLimitegastos(this.limitegastos)
    .subscribe(res => {
      this.router.navigate(['/limitegastos']);
    });
  }
  cancelar() {
    this.router.navigate(['/limitegastos'])
  }

  irParaLimiteGastos() {
  this.router.navigate(['/limitegastos']);
  }

  home() {
  this.router.navigate(['/dashboard']);
}
}
