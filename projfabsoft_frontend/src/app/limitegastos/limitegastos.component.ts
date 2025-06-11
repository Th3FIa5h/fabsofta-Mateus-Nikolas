import { Component } from '@angular/core';
import { Limitegastos } from '../model/limitegastos';
import { LimitegastosService } from '../service/limitegastos.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-limitegastos',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './limitegastos.component.html',
  styleUrl: './limitegastos.component.css',
  providers: [LimitegastosService]
})
export class LimitegastosComponent {
  public listaLimiteGastos: Limitegastos[] = [];
  constructor(
    private limiteService: LimitegastosService
  ) {}
  ngOnInit(): void {
    this.limiteService.getLimiteGastos().subscribe( limitegastos => {
      this.listaLimiteGastos = limitegastos;
    })
  }
}
