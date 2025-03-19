package br.univille.entity;
import java.lang.reflect.Array;
import java.util.ArrayList;

public class Pessoa {
    private String nome;
    private Long id;
    private String endereco;

    private ArrayList<Pokemon> listaPokemon = new ArrayList<Pokemon>();

    public ArrayList<Pokemon> getListaPokemon(){
        return listaPokemon;
    }

    public void setListaPokemon(ArrayList<Pokemon> listaPokemon){
        this.listaPokemon = listaPokemon;
    }

    private Cidade cidade;
    
    
    public Cidade getCidade() {
        return cidade;
    }
    public void setCidade(Cidade cidade) {
        this.cidade = cidade;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getEndereco() {
        return endereco;
    }
    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }
    //Construtor (mesmo nome da classe, não tem retorno)
    public Pessoa(String nome) {
        //this referencia a classe
        this.nome = nome;
    }
    //Dois metodos com assinatura semelhante = polimofirmo
    public Pessoa() {
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
    //Sobreescrita de metodo (overwrite)
    @Override
    public String toString(){
        return super.toString() + "/" + getNome();
    }
}
