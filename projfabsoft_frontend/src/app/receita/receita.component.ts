import { Component } from '@angular/core';
import { Receita } from '../model/receita';
import { ReceitaService } from '../service/receita.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-receita',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './receita.component.html',
  styleUrl: './receita.component.css',
  providers: [ReceitaService]
})
export class ReceitaComponent {
  public listaReceitas: Receita[] = [];
  constructor(
    private receitaService: ReceitaService
  ) {}
  ngOnInit(): void {
    this.receitaService.getReceitas().subscribe( receitas => {
      this.listaReceitas = receitas;
    })
  }
}
