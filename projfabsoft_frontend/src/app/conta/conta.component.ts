import { Component } from '@angular/core';
import { Conta } from '../model/conta';
import { ContaService } from '../service/conta.service';

@Component({
  selector: 'app-conta',
  imports: [],
  templateUrl: './conta.component.html',
  styleUrl: './conta.component.css'
})
export class ContaComponent {
  public listaContas: Conta[] = [];
  constructor(
    private contaService:ContaService
  ) {}
  ngOnInit(): void {
    this.contaService.getConta().subscribe( resposta => {
      this.listaContas = resposta;
    })
  }
}
