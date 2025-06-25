import { Component } from '@angular/core';
import { Despesa } from '../model/despesa';
import { DespesaService } from '../service/despesa.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-despesa',
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './form-despesa.component.html',
  styleUrl: './form-despesa.component.css',
  providers: [DespesaService, Router]
})
export class FormDespesaComponent {
  despesa: Despesa = new Despesa();
  constructor(
    private despesaService: DespesaService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) {
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
}
