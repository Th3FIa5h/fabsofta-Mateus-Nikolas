import { Cartao } from "./cartao";
import { Conta } from "./conta";

export class Despesa {
    id: number;
    descricao: string;
    valor: number;
    data: Date;
    tipo: string;
    conta: Conta;
    cartao: Cartao;
}
