import { Receita } from "./receita";
import { Investimento } from "./investimento";

export class Objetivo {
    id: number;
    valorAlvo: number;
    progressoAtual: number;
    receita: Receita;
    investimento: Investimento;
}
