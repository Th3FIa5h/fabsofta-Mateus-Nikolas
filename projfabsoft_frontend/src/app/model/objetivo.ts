import { Receita } from "./receita";
import { Investimento } from "./investimento";

export class Objetivo {
    id: number;
    valorAlvo: number;
    progressoAtual: number;
    listaReceitas: Receita[];
    listaInvestimento: Investimento[];
}
