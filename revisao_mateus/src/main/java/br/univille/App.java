package br.univille;

import br.univille.entity.Cidade;
import br.univille.entity.Pessoa;

public class App {
    public static void main(String[] args) {
        //System.out.println("Hello, World!");
        //new = Instância
        Cidade jlle = new Cidade();
        jlle.setNome("Joinville");
        jlle.setEstado("Santa Catarina");


        Pessoa mariazinha = new Pessoa("Mariazinha");
        Pessoa zezinho = new Pessoa();
        zezinho.setNome("Zezinho");
        zezinho.setCidade(jlle);

        System.out.println(mariazinha);
        System.out.println(zezinho);
    }
}
