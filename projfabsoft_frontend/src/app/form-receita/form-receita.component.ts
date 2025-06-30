import { Component } from '@angular/core';
import { Receita } from '../model/receita';
import { ReceitaService } from '../service/receita.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-receita',
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './form-receita.component.html',
  styleUrl: './form-receita.component.css',
  providers: [ReceitaService, Router]
})
export class FormReceitaComponent {
  receita: Receita = new Receita();
  constructor(
    private receitaService: ReceitaService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) {
    const id = this.activedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.receitaService.getReceitaById(id)
      .subscribe(receita => {
        this.receita = receita;
      });
    }
  }

  salvar() {
    this.receitaService.saveReceita(this.receita)
    .subscribe(res => {
      this.router.navigate(['/receita']);
    });
  }

  cancelar() {
    this.router.navigate(['/receita'])
  }

  irParaReceita() {
  this.router.navigate(['/receita']);
  }

  home() {
  this.router.navigate(['/dashboard']);
}
}
