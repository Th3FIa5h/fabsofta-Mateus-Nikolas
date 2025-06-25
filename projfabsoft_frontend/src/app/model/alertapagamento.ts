import { Cartao } from "./cartao";
import { Conta } from "./conta";

export class Alertapagamento {
    id: number;
    descricao: string;
    dataVencimento: Date;
    status: string;
    conta: Conta;
    cartao: Cartao;
}
