import { Routes } from '@angular/router';
import { ContaComponent } from './conta/conta.component';
import { CartaoComponent } from './cartao/cartao.component';
import { AlertapagamentoComponent } from './alertapagamento/alertapagamento.component';
import { DespesaComponent } from './despesa/despesa.component';
import { InvestimentoComponent } from './investimento/investimento.component';
import { LimitegastosComponent } from './limitegastos/limitegastos.component';
import { ObjetivoComponent } from './objetivo/objetivo.component';

export const routes: Routes = [
    { path: 'contas', component: ContaComponent },
    { path: 'cartao', component: CartaoComponent },
    { path: 'alertapagamento', component: AlertapagamentoComponent },
    { path: 'despesa', component: DespesaComponent },
    { path: 'investimento', component: InvestimentoComponent },
    { path: 'limitegastos', component: LimitegastosComponent },
    { path: 'objetivo', component: ObjetivoComponent },
    { path: 'receita', component: ReceitaComponent }
];