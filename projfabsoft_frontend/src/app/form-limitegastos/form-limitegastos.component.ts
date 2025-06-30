import { Component } from '@angular/core';
import { Limitegastos } from '../model/limitegastos';
import { LimitegastosService } from '../service/limitegastos.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-limitegastos',
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './form-limitegastos.component.html',
  styleUrl: './form-limitegastos.component.css',
  providers: [LimitegastosService, Router]
})
export class FormLimitegastosComponent {
  limitegastos: Limitegastos = new Limitegastos();
  constructor(
    private limitegastosService: LimitegastosService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) {
    const id = this.activedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.limitegastosService.getLimitegastosById(id)
      .subscribe(limitegastos => {
        this.limitegastos = limitegastos;
      });
    }
  }

  salvar() {
    this.limitegastosService.saveLimitegastos(this.limitegastos)
    .subscribe(res => {
      this.router.navigate(['/limitegastos']);
    });
  }
}
