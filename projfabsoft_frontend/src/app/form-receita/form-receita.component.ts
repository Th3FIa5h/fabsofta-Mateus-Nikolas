import { Component } from '@angular/core';
import { Receita } from '../model/receita';
import { ReceitaService } from '../service/receita.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ContaService } from '../service/conta.service';
import { Conta } from '../model/conta';

@Component({
  selector: 'app-form-receita',
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './form-receita.component.html',
  styleUrl: './form-receita.component.css',
  providers: [ReceitaService, Router, ContaService]
})
export class FormReceitaComponent {
  receita: Receita = new Receita();
  contas: Conta[] = [];

  constructor(
    private receitaService: ReceitaService,
    private contaService: ContaService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) {
    let receitaCarregada: any = null;
    const id = this.activedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.receitaService.getReceitaById(id)
      .subscribe(receita => {
        receitaCarregada = receita;
        if (receitaCarregada.data && typeof receitaCarregada.data === 'number') {
          const date = new Date(receitaCarregada.data);
          receitaCarregada.data = date.toISOString().substring(0, 10) as any;
        } else if (receitaCarregada.data && typeof receitaCarregada.data === 'string' && (receitaCarregada.data as string).includes('-')) {
          receitaCarregada.data = (receitaCarregada.data as string).split('T')[0] as any;
        } else {
          receitaCarregada.data = undefined as any;
        }
        if (receitaCarregada.conta && receitaCarregada.conta.id) {
          const contaEncontrada = this.contas.find((c: any) => c && c.id === receitaCarregada.conta.id);
          if (contaEncontrada) receitaCarregada.conta = contaEncontrada;
        }
        this.receita = receitaCarregada;
      });
    }
    this.contaService.getConta().subscribe(contas => {
      this.contas = contas;
      if (this.receita && this.receita.conta) {
        let contaId = typeof this.receita.conta === 'number' ? this.receita.conta : this.receita.conta.id;
        const contaEncontrada = this.contas.find((c: any) => c && c.id === contaId);
        if (contaEncontrada) this.receita.conta = contaEncontrada;
      }
    });
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
