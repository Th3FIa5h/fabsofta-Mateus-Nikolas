package br.univille;

import br.univille.entity.Cidade;
import br.univille.entity.Pessoa;
import br.univille.entity.Pokemon;

public class App {
    public static void main(String[] args) {
        //System.out.println("Hello, World!");
        //new = Instância
        Cidade jlle = new Cidade();
        jlle.setNome("Joinville");
        jlle.setEstado("Santa Catarina");

        Pokemon greninja = new Pokemon("Greninja");
        Pokemon aerodactyl = new Pokemon("Aerodactyl");

        Pessoa mariazinha = new Pessoa("Mariazinha");
        Pessoa zezinho = new Pessoa();
        zezinho.setNome("Zezinho");
        zezinho.setCidade(jlle);
        zezinho.getListaPokemon().add(greninja);
        zezinho.getListaPokemon().add(aerodactyl);

        for (Pokemon umPokemon : zezinho.getListaPokemon()){
            System.out.println(umPokemon);
        }


        System.out.println(mariazinha);
        System.out.println(zezinho);
    }
}
