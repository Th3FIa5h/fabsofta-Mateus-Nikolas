package br.univille.entity;
import br.univille.entity.Pessoa;
import br.univille.entity.Cidade;

public class App {
    public static void main(String[] args) throws Exception {
        //System.out.println("Hello, World!");
        //new = Instância
        Cidade jlle = new Cidade();
        jlle.setNome("Joinville");
        jlle.setEstado("Santa Catarina");

        Pessoa mariazinha = new Pessoa("mariazinha");
        Pessoa zezinho = new Pessoa();
        zezinho.setNome("Zezinho");
        zezinho.setCidade(jlle);

        System.out.println(mariazinha);
        System.out.println(zezinho);
    }
}
