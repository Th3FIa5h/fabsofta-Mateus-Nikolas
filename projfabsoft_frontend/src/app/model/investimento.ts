import { Conta } from "./conta";

export class Investimento {
    id: number;
    descricao: string;
    valor: number;
    prazo: Date;
    conta: Conta;
}
