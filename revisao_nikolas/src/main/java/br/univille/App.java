package br.univille;

import br.univille.entity.Pessoa;
import br.univille.entity.Cidade;
import br.univille.entity.Pokemon;


public class App {
    public static void main(String[] args) throws Exception {
        //System.out.println("Hello, World!");
        //new = Instância
        Cidade jlle = new Cidade();
        jlle.setNome("Joinville");
        jlle.setEstado("Santa Catarina");

        Pokemon snorlax = new Pokemon("Snorlax");
        Pokemon arceus = new Pokemon("Arceus");

        Pessoa mariazinha = new Pessoa("mariazinha");
        Pessoa zezinho = new Pessoa();
        zezinho.setNome("Zezinho");
        zezinho.setCidade(jlle);
        zezinho.getListaPokemon().add(snorlax);
        zezinho.getListaPokemon().add(arceus);

        for(var umPokemon : zezinho.getListaPokemon()){
            System.out.println(umPokemon);
        }

        System.out.println(mariazinha);
        System.out.println(zezinho);
    }
}
