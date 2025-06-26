import { Component, ElementRef, ViewChild } from '@angular/core';
import { Objetivo } from '../model/objetivo';
import { ObjetivoService } from '../service/objetivo.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-objetivo',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './objetivo.component.html',
  styleUrl: './objetivo.component.css',
  providers: [ObjetivoService, Router]
})
export class ObjetivoComponent {
  public listaObjetivos: Objetivo[] = [];

  @ViewChild('myModal') modalElement!: ElementRef;
  private modal!: bootstrap.Modal;

  private objetivoSelecionado!: Objetivo;

  constructor(
    private objetivoService: ObjetivoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.objetivoService.getObjetivo().subscribe(objetivos => {
      this.listaObjetivos = objetivos;
    });
  }

  novo() {
    this.router.navigate(['/objetivo/novo']);
  }

  alterar(objetivo: Objetivo) {
    this.router.navigate(['/objetivo/alterar', objetivo.id]);
  }

  abrirConfirmacao(objetivo: Objetivo) {
    this.objetivoSelecionado = objetivo;
    this.modal = new bootstrap.Modal(this.modalElement.nativeElement);
    this.modal.show();
  }

  fecharConfirmacao() {
    this.modal.hide();
  }

  confirmarExclusao() {
    this.objetivoService.excluirObjetivo(this.objetivoSelecionado.id).subscribe(
      () => {
        this.fecharConfirmacao();
        this.objetivoService.getObjetivo().subscribe(objetivos => {
          this.listaObjetivos = objetivos;
        });
      },
      error => {
        console.error('Erro ao excluir objetivo:', error);
      }
    );
  }
}
