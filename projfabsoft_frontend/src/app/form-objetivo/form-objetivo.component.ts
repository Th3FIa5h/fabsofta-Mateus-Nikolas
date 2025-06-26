import { Component } from '@angular/core';
import { Objetivo } from '../model/objetivo';
import { ObjetivoService } from '../service/objetivo.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-objetivo',
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './form-objetivo.component.html',
  styleUrl: './form-objetivo.component.css',
  providers: [ObjetivoService, Router]
})
export class FormObjetivoComponent {
  objetivo: Objetivo = new Objetivo();
  constructor(
    private objetivoService: ObjetivoService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) {
    const id = this.activedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.objetivoService.getObjetivoById(id)
      .subscribe(objetivo => {
        this.objetivo = objetivo;
      });
    }
  }

  salvar() {
    this.objetivoService.saveObjetivo(this.objetivo)
    .subscribe(res => {
      this.router.navigate(['/objetivo']);
    });
  }
}
