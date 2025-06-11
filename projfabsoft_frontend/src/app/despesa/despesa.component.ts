import { Component } from '@angular/core';
import { Despesa } from '../model/despesa';
import { DespesaService } from '../service/despesa.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-despesa',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './despesa.component.html',
  styleUrl: './despesa.component.css',
  providers: [DespesaService]
})
export class DespesaComponent {
  public listaDespesas: Despesa[] = [];
  constructor(
    private despesaService: DespesaService
  ) {}
  ngOnInit(): void {
    this.despesaService.getDespesas().subscribe( despesas => {
      this.listaDespesas = despesas;
    })
  }
}
