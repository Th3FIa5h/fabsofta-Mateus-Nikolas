import { Routes } from '@angular/router';
import { ContaComponent } from './conta/conta.component';
import { CartaoComponent } from './cartao/cartao.component';
import { AlertapagamentoComponent } from './alertapagamento/alertapagamento.component';
import { DespesaComponent } from './despesa/despesa.component';
import { InvestimentoComponent } from './investimento/investimento.component';
import { LimitegastosComponent } from './limitegastos/limitegastos.component';
import { ObjetivoComponent } from './objetivo/objetivo.component';
import { ReceitaComponent } from './receita/receita.component';
import { FormContaComponent } from './form-conta/form-conta.component';
import { FormCartaoComponent } from './form-cartao/form-cartao.component';
import { FormAlertapagamentoComponent } from './form-alertapagamento/form-alertapagamento.component';
import { FormDespesaComponent } from './form-despesa/form-despesa.component';
import { FormInvestimentoComponent } from './form-investimento/form-investimento.component';
import { FormLimitegastosComponent } from './form-limitegastos/form-limitegastos.component';
import { FormObjetivoComponent } from './form-objetivo/form-objetivo.component';
import { FormReceitaComponent } from './form-receita/form-receita.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    { path: 'contas', component: ContaComponent },
    { path: 'contas/novo', component: FormContaComponent },
    { path: 'contas/alterar/:id', component: FormContaComponent },

    { path: 'cartao', component: CartaoComponent },
    { path: 'cartao/novo', component: FormCartaoComponent },
    { path: 'cartao/alterar/:id', component: FormCartaoComponent },

    { path: 'alertapagamento', component: AlertapagamentoComponent },
    { path: 'alertapagamento/novo', component: FormAlertapagamentoComponent },
    { path: 'alertapagamento/alterar/:id', component: FormAlertapagamentoComponent },

    { path: 'despesa', component: DespesaComponent },
    { path: 'despesa/novo', component: FormDespesaComponent },
    { path: 'despesa/alterar/:id', component: FormDespesaComponent },

    { path: 'investimento', component: InvestimentoComponent },
    { path: 'investimento/novo', component: FormInvestimentoComponent },
    { path: 'investimento/alterar/:id', component: FormInvestimentoComponent },

    { path: 'limitegastos', component: LimitegastosComponent },
    { path: 'limitegastos/novo', component: FormLimitegastosComponent },
    { path: 'limitegastos/alterar/:id', component: FormLimitegastosComponent },

    { path: 'objetivo', component: ObjetivoComponent },
    { path: 'objetivo/novo', component: FormObjetivoComponent },
    { path: 'objetivo/alterar/:id', component: FormObjetivoComponent },

    { path: 'receita', component: ReceitaComponent },
    { path: 'receita/novo', component: FormReceitaComponent },
    { path: 'receita/alterar/:id', component: FormReceitaComponent },

    { path: 'dashboard', component: DashboardComponent}
];